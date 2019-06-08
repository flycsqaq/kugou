import React, { useEffect } from 'react'
import { NewSongsContainer } from '@context/newSongs';
import Songs from '@shared/Songs'
export default () => {
  let { newSongs, handleGetNewSongs } = NewSongsContainer.useContainer()
  useEffect(
    () => {
      handleGetNewSongs()
    }, []
  )
  return (
    <Songs title={'新歌推荐'} data={newSongs} />
  )
}