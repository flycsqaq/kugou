import React, { useEffect, useState } from 'react'
import { MGraid, MTypography } from '@components/material-ui'
import ViewButtons from '@shared/pagination/ViewButtons'
import { MiddlewareProps } from '@models/components';
import MiddlewareViewPagination from '@shared/middleware/viewspagination';
import { MediaQueryContainer } from '@context/mediaQuery';
import { HomeStyle } from '@styles/Home'
import { MenuListContainer } from '@context/menuList';
import MenuDisplay from '@shared/display/MenuDisplay'

export default () => {
  const classes = HomeStyle({})
  const { menus } = MediaQueryContainer.useContainer()
  const { menuList, handleGetMenuList } = MenuListContainer.useContainer()
  useEffect(
    () => {
      handleGetMenuList()
    }, []
  )
  const [row, setRow] = useState(3)
  const [isOpen, setOpen] = useState(false)
  
  useEffect(
    () => {
      if (menus * row >= menuList.length) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, [menus, row, menuList]
  )
  const props: MiddlewareProps = {
    View: MenuDisplay,
    row,
    data: menuList,
    type: 'menus',
    actions: {
      open: () => {
        setRow(row + 3)
      },
    },
    Pagination: ViewButtons,
    isOpen
  }
  const Menus = MiddlewareViewPagination(props)
  return (
    <MGraid container spacing={3}>
      <MGraid item xs={12}>
        <MTypography component="h1" className={classes.h1}>
          推荐歌单
        </MTypography>
        <MGraid container>
          <Menus />
        </MGraid>
      </MGraid>
    </MGraid>
  )
}