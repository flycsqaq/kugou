import React, { useEffect, useState, Dispatch } from 'react'
import { getRankSongs } from '@services/api'
import { SongRankSongsRes } from '@models/response';
import { SongBrief } from '@models/data';
import { MGraid, MTypography } from '@components/material-ui'
import ViewButtons from '@shared/pagination/ViewButtons'
import SongDisplay from '@shared/display/SongDisplay'
import { MiddlewareProps } from '@models/components';
import MiddlewareViewPagination from '@shared/middleware/viewspagination';
import { HomeStyle } from '@styles/Home'
import { MediaQueryContainer } from '@context/mediaQuery';
interface Props {
  match: any
}

export default (props: Props) => {
  const classes = HomeStyle({})
  const { songs } = MediaQueryContainer.useContainer()
  const [$songs, setSongs]: [SongBrief[], Dispatch<any>] = useState([])
  const [title, setTitle]: [string, Dispatch<any>] = useState('')
  useEffect(
    () =>{
      getRankSongs(props.match.params.id)
        .then((res: SongRankSongsRes) => {
          setSongs(res.data.data.songs.list)
          setTitle(res.data.data.info.rankname)
        })
    }, [props.match.params.id]
  )
  const [row, setRow] = useState(4)
  const [isOpen, setOpen] = useState(false)
  useEffect(
    () => {
      if (songs * row >= $songs.length) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, [songs, row, $songs]
  )
  const propss: MiddlewareProps = {
    View: SongDisplay,
    row,
    data: $songs,
    type: 'songs',
    actions: {
      open: () => {
        setRow(row + 4)
      }
    },
    Pagination: ViewButtons,
    isOpen
  }
  const Songs = MiddlewareViewPagination(propss)
  return (
    <MGraid container spacing={3}>
      <MGraid item xs={12}>
        <MTypography component="h1" className={classes.h1}>
          {title}
        </MTypography>
        <MGraid container>
          <Songs />
        </MGraid>
      </MGraid>
    </MGraid>
  )
}