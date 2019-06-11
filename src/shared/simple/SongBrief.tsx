import React from 'react'
import { MPaper, MTypography, MIconButton, MPlayArrow, MPause } from '@components/material-ui'
import { SongStyle } from '@styles//shared/song'
import { PlayContainer } from '@context/play';
interface Props {
  hash: string
  filename: string
  cover?: string
  index?: number
}

export default (props: Props) => {
  const { setPlayState, setPlay, play, playState, handleAddSong } = PlayContainer.useContainer()
  const classes = SongStyle({})
  function handlePlay() {
    handleAddSong(props as any)
    setPlay(props)
    setPlayState(true)
  }
  if (props.cover) {
    return (
      <div>none</div>
    )
  } else {
    return (
      <MPaper className={classes.paper}>
        <MTypography>
          {props.index || ''} - {props.filename}
        </MTypography>
        {
          playState && props.hash === play.hash ?
          <MIconButton onClick={() => setPlayState(false)}>
            <MPause />
          </MIconButton>:
          <MIconButton onClick={handlePlay}>
            <MPlayArrow />
          </MIconButton>
        }
      </MPaper>
    )
  }
}