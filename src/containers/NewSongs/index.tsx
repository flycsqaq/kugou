import React, { useEffect, useState } from 'react'
import { NewSongsContainer } from '@context/newSongs'
import { MGraid, MTypography } from '@components/material-ui'
import ViewButtons from '@shared/pagination/ViewButtons'
import SongDisplay from '@shared/display/SongDisplay'
import { MiddlewareProps } from '@models/components';
import MiddlewareViewPagination from '@shared/middleware/viewspagination';
import { MediaQueryContainer } from '@context/mediaQuery';
import { HomeStyle } from '@styles/Home'

export default () => {
  const classes = HomeStyle({})
  const { newSongs, handleGetNewSongs } = NewSongsContainer.useContainer()
  const { songs } = MediaQueryContainer.useContainer()

  useEffect(
    () => {
      handleGetNewSongs()
    }, []
  )
  useEffect(
    () => {
      window.scrollTo(0,0)
    }, []
  )
  const [row, setRow] = useState(4)
  const [isOpen, setOpen] = useState(false)
  useEffect(
    () => {
      if (songs * row >= newSongs.length) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, [songs, row, newSongs]
  )
  const props: MiddlewareProps = {
    View: SongDisplay,
    row,
    data: newSongs,
    type: 'songs',
    actions: {
      open: () => {
        setRow(row + 4)
      }
    },
    Pagination: ViewButtons,
    isOpen
  }
  const News = MiddlewareViewPagination(props)
  return (
    <MGraid container spacing={3}>
      <MGraid item xs={12}>
        <MTypography component="h1" className={classes.h1}>
          最新歌曲
        </MTypography>
      </MGraid>
      <MGraid item>
        <MGraid container>
          <News />
        </MGraid>
      </MGraid>
    </MGraid>
  )
}