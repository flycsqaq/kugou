import React, { useEffect, useState, Dispatch } from 'react'
import { SongDetail, SongBrief } from '@models/data';
import { createContainer } from "unstated-next"
import { getInit, saveSongCache } from '@cache/init'

const SINGER_CYCLE = 'SINGER_CYCLE'
type SINGER_CYCLE = typeof SINGER_CYCLE
const RANDOM_CYCLE = 'RANDOM_CYCLE'
type RANDOM_CYCLE = typeof RANDOM_CYCLE
const ORDER_CYCLE = 'ORDER_CYCLE'
type ORDER_CYCLE = typeof ORDER_CYCLE

type Pattern = SINGER_CYCLE | RANDOM_CYCLE | ORDER_CYCLE

const PATTERN = [SINGER_CYCLE, RANDOM_CYCLE, ORDER_CYCLE]

const Play = () => {
  const initsong = {
    hash: '',
    singerName: '',
    url: '',
    imgUrl: '',
    backup_url: []
  }
  const init = getInit()
  const [listName, setListName]: [string, Dispatch<any>] = useState(init.listName)
  const [songs, setSongs]: [SongDetail[], Dispatch<any>] = useState(init.list[init.listName])
  const initSong = init.list[init.listName][0] || initsong
  const [play, setPlay]: [SongDetail, Dispatch<any>] = useState(initSong)
  const [playState, setPlayState]: [boolean, Dispatch<any>] = useState(false)
  const initPatter: Pattern = 'SINGER_CYCLE'
  const [pattern, setPattern]: [Pattern, Dispatch<Pattern>] = useState(initPatter) as any

  useEffect(
    () => {
      saveSongCache(listName, songs)
    }, [songs, listName]
  )
  const handleNext = () => {
    const current: number = songs.findIndex((song: SongDetail) => (
      song.hash === play.hash
    ))
    let next: number = current > -1? current +1 : 0
    if (next >= songs.length) next = 0
    setPlay(songs[next])
  }
  // 上一首
  const handleBack = () => {
    const current: number = songs.findIndex((song: SongDetail) => (
      song.hash === play.hash
    ))
    let back: number = current > -1? current -1: 0
    if (back < 0) back = songs.length - 1
    setPlay(songs[back])
  }
  // 更换歌曲
  const handleSetPlay = (hash: string) => {
    const song = songs.find((song: SongDetail) => (
      song.hash === hash
    ))
    if (song) setPlay(song)
  }
  // 添加歌曲
  const handleAddSong = (songa: SongDetail) => {
    const current: number = songs.findIndex((song: SongDetail) => (
      song.hash === songa.hash
    ))
    if (current === -1) {
      const newSongs = songs.concat(songa)
      setSongs(newSongs)
    }
  }
  // 移除歌曲
  const handleRemoveSong = (hash: string) => {
    const songIndex: number = songs.findIndex((song: SongDetail) => (
      song.hash === play.hash
    ))
    const newSongs = songs.slice().splice(songIndex, 1)
    setSongs(newSongs)
  }
  // 更换歌单
  const handleSetSongs = (songs: SongDetail[]) => {
    setSongs(songs)
  }
  const handleNextPattern = () => {
    let index: number = PATTERN.findIndex(p => p === pattern)
    index++
    if (index > PATTERN.length - 1) {
      index = 0
    }
    setPattern(PATTERN[index] as any)
  }
  return {
    songs,setSongs, play, setPlay,
    handleNext, handleBack, handleSetPlay, 
    handleAddSong, handleRemoveSong, handleSetSongs,
    playState, setPlayState,
    pattern, setPattern, handleNextPattern
  }
}

export const PlayContainer = createContainer(Play)