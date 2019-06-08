import { useState, Dispatch } from 'react'
import { createContainer } from "unstated-next"
import { SongBrief } from '@models/data';
import { getNewSongs } from '@services/api';
import { NewSongRes } from '@models/response';

function useNewSongs() {
  const [newSongs, setNewSongs]: [SongBrief[], Dispatch<any>] = useState([])
  const changeNewSongs = (songs:SongBrief[] = []) => setNewSongs(songs)
  const handleGetNewSongs = () => getNewSongs().then((res: NewSongRes) => {
    changeNewSongs(res.data.data)
  })
  return {
    newSongs,
    handleGetNewSongs
  }
}

export const NewSongsContainer = createContainer(useNewSongs)
