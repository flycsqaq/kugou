import React, { useEffect, useRef, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { PlayContainer } from '@context/play';
import { getSongInfo } from '@services/api';
import { SongInfoRes } from '@models/response';
import { MCard, MIconButton, MPlayArrow, MPause, MNext, MBack, MButton, MTypography, MStyledSlider } from '@components/material-ui';
import { changeImgUrl } from '@utils/imgUrl'
import musicImage from '@assets/music.jpg'
import { playStyle } from '@styles/shared/play'

function MediaControlCard() {
  const classes = playStyle({});
  const { pattern, playState, handleNextPattern, setPlayState, songs, play, setPlay, handleNext, handleBack } = PlayContainer.useContainer()
  useEffect(
    () => {
      if (play.url === undefined && play.hash) {
        getSongInfo(play.hash)
          .then((res: SongInfoRes) => {
            setPlay(res.data.data)
          })
      }
    }, [play]
  )
  useEffect(
    () => {
      if (!playState) {
        handlePause()
      }
    }, [playState]
  )
  const audioRef = useRef(null as any)
  let playId = -1
  function handlePlay() {
    if (audioRef.current && audioRef.current.currentSrc && audioRef.current.paused) {
      if (audioRef.current.play) {
        audioRef.current.play()
        changeTimes()
        playId = setInterval(changeTimes, 1000)
        setPlayState(true)
      }
    }
  }
  function handlePause() {
    if (!audioRef.current.paused) {
      clearInterval(playId)
      audioRef.current.pause()
      setPlayState(false)
    }
  }
  function canPlay() {
    if (playState) {
      handlePlay()
    }
  }
  const [[currentTime, duration], changeTime] = useState([0, 0])
  function fastSeek(time: any) {
    if (time >=0 && time <= audioRef.current.duration) {
      audioRef.current.currentTime = time
    }
  }
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    changeTime([newValue, duration]);
    fastSeek(newValue)
  }
  function changeTimes() {
    const audio = audioRef.current
    if (audio && audio.currentTime !== undefined && audio.duration !== undefined) {
      changeTime([audio.currentTime, audio.duration])
    }
  }
  const patternMap: any = {
    'SINGER_CYCLE': () => {handlePause(); handlePlay()},
    'ORDER_CYCLE': () => handleNext(),
    'RANDOM_CYCLE': () => setPlay(songs[Math.floor(Math.random() * songs.length)])
  }
  const patterName: any = {
    'SINGER_CYCLE': '单曲循环',
    'ORDER_CYCLE': '顺序播放',
    'RANDOM_CYCLE': '随机播放'
  }
  function handleEnded() {
    patternMap[pattern]()
  }
  return (
    <MCard className={classes.card}>
      <audio onEnded={handleEnded} onCanPlay={canPlay} ref={audioRef} src={play.url} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <MButton className={classes.cycle} onClick={handleNextPattern}>
            {patterName[pattern]}            
          </MButton>
          <Typography component="h1" variant="h5" className={classes.text}>
            {play.songName || 'loading'} - <span>{play.singerName || 'loading'}</span>  
          </Typography>
        </CardContent>
        <div className={classes.slider}>
          <MStyledSlider value={currentTime} max={duration} aria-labelledby="label" onChange={handleChange} />
          <MTypography component="h5" variant="h5" className={classes.time}>
            <span>{currentTime.toFixed(0)}</span>
            <span className={classes.floatRight}>{duration.toFixed(0)}</span>
          </MTypography>
        </div>
        <div className={classes.controls}>
          <MIconButton onClick={handleBack}>
            <MBack />
          </MIconButton>
          {
            playState?
            <MIconButton onClick={() => setPlayState(false)}>
              <MPause className={classes.playIcon} />
            </MIconButton>:
            <MIconButton onClick={handlePlay}>
              <MPlayArrow className={classes.playIcon} />
            </MIconButton> 
          }
          <MIconButton onClick={handleNext}>
            <MNext />
          </MIconButton>
        </div>
      </div>
      {
        play.imgUrl?
        <CardMedia
          className={classes.cover}
          image={changeImgUrl(play.imgUrl, 240)}
        />:
        <CardMedia
          className={classes.cover}
          image={musicImage}
        />
      }
    </MCard>
  );
}

export default MediaControlCard;