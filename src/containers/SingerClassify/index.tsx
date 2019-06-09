import React, { useEffect, useState } from 'react'
import { MGraid, MTypography } from '@components/material-ui'
import { MiddlewareProps } from '@models/components';
import MiddlewareViewPagination from '@shared/middleware/viewspagination';
import { MediaQueryContainer } from '@context/mediaQuery';
import { HomeStyle } from '@styles/Home'
import { MenuListContainer } from '@context/menuList';
import MenuDisplay from '@shared/display/MenuDisplay'
import ClassesDisplay from '@shared/display/ClassesDisplay'
import ViewButtons from '@shared/pagination/ViewButtons'
import { SingerClassifyContainer } from '@context/singerClassify';

export default () => {
  const classes = HomeStyle({})
  const { singers } = MediaQueryContainer.useContainer()
  const { singerClassify, handleGetSingerClassify } = SingerClassifyContainer.useContainer()
  useEffect(
    () => {
      handleGetSingerClassify()
    }, []
  )
  const [row, setRow] = useState(2)
  const [isOpen, setOpen] = useState(false)
  useEffect(
    () => {
      if (singers * row >= singerClassify.length) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, [singers, row, singerClassify]
  )
  const props: MiddlewareProps = {
    View: ClassesDisplay,
    row,
    data: singerClassify,
    type: 'singers',
    actions: {
      open: () => {
        setRow(row + 2)
      },
    },
    Pagination: ViewButtons,
    isOpen
  }
  const Singers = MiddlewareViewPagination(props)
  return (
    <MGraid container spacing={3}>
    <MGraid item xs={12}>
      <MTypography component="h1" className={classes.h1}>
        推荐歌单
      </MTypography>
      <MGraid container>
        <Singers />
      </MGraid>
    </MGraid>
  </MGraid>
  )
}