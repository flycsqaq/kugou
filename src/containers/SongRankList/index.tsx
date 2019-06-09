import React, { useEffect, useState } from 'react'
import { MGraid, MTypography } from '@components/material-ui'
import ViewButtons from '@shared/pagination/ViewButtons'
import { MiddlewareProps } from '@models/components';
import MiddlewareViewPagination from '@shared/middleware/viewspagination';
import { MediaQueryContainer } from '@context/mediaQuery';
import { HomeStyle } from '@styles/Home'
import { RankListContainer } from '@context/rankList';
import RankDisplay from '@shared/display/RankDisplay'

export default () => {
  const classess = HomeStyle({})
  const { classes } = MediaQueryContainer.useContainer()
  const { rankList, handleGetRankList } = RankListContainer.useContainer()
  useEffect(
    () => {
      handleGetRankList()
    }, []
  )
  const [row, setRow] = useState(3)
  const [isOpen, setOpen] = useState(false)
  
  useEffect(
    () => {
      if (classes * row >= rankList.length) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, [classes, row, rankList]
  )
  const props: MiddlewareProps = {
    View: RankDisplay,
    row,
    data: rankList,
    type: 'classes',
    actions: {
      open: () => {
        setRow(row + 3)
      },
    },
    Pagination: ViewButtons,
    isOpen
  }
  const Ranks = MiddlewareViewPagination(props)
  return (
    <MGraid container spacing={3}>
    <MGraid item xs={12}>
      <MTypography component="h1" className={classess.h1}>
        歌曲排行榜
      </MTypography>
      <MGraid container>
        <Ranks />
      </MGraid>
    </MGraid>
  </MGraid>
  )
}