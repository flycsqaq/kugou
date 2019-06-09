import React, { useEffect, Dispatch, useState } from 'react'
import { getRankSongs } from '@services/api';
import { SongRankSongsRes } from '@models/response';
import { SongBrief } from '@models/data';
import Songs from '@shared/Songs'

interface Props {
  match: any
}

export default (props: Props) => {
  const [songs, setSongs]: [SongBrief[], Dispatch<any>] = useState([])
  const [title, setTitle]: [string, Dispatch<any>] = useState('')
  useEffect(
    () => {
      getRankSongs(props.match.params.id)
        .then((res: SongRankSongsRes) => {
          setSongs(res.data.data.songs.list)
          setTitle(res.data.data.info.rankname)
        })
    }, []
  )
  return (
    <Songs data={songs} title={title} />
  )
}