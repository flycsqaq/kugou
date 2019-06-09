import React, { useEffect, useState } from 'react'
import SongDisplay from '@shared/display/SongDisplay'
import MenuDisplay from '@shared/display/MenuDisplay'
import RankDisplay from '@shared/display/RankDisplay'
import ClassesDisplay from '@shared/display/ClassesDisplay'
import { NewSongsContainer } from '@context/newSongs'
import MiddlewareViewPagination from '@shared/middleware/viewspagination';
import { MiddlewareProps } from '@models/components';
import HomeButtons from '@shared/pagination/HomeButtons'
import { MGraid, MTypography, MIconButton, MMoreIcon } from '@components/material-ui'
import { MenuListContainer } from '@context/menuList';
import { RankListContainer } from '@context/rankList';
import { SingerClassifyContainer } from '@context/singerClassify';
import { HomeStyle } from '@styles/Home'
import { Link } from 'react-router-dom'

export default () => {
  const classes = HomeStyle({})
  function NewSongs() {
    const { newSongs, handleGetNewSongs } = NewSongsContainer.useContainer()
    useEffect(
      () => {
        handleGetNewSongs()
      }, []
    )
    const [row, setRow] = useState(2)
    const [isOpen, setIsOpen] = useState(false)
    const props: MiddlewareProps = {
      View: SongDisplay,
      row,
      data: newSongs,
      type: 'songs',
      actions: {
        open: () => {
          setRow(row + 2)
          setIsOpen(true)
        },
        close: () => {
          setRow(row - 2)
          setIsOpen(false)
        }
      },
      Pagination: HomeButtons,
      isOpen
    }
    const News = MiddlewareViewPagination(props)
    return (
      <News />
    )
  }

  function MenuList() {
    const { menuList, handleGetMenuList } = MenuListContainer.useContainer()
    useEffect(
      () => {
        handleGetMenuList()
      }, []
    )
    const [row, setRow] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const props: MiddlewareProps = {
      View: MenuDisplay,
      row,
      data: menuList,
      type: 'menus',
      actions: {
        open: () => {
          setRow(row + 1)
          setIsOpen(true)
        },
        close: () => {
          setRow(row - 1)
          setIsOpen(false)
        }
      },
      Pagination: HomeButtons,
      isOpen
    }
    const Menus = MiddlewareViewPagination(props)
    return (
      <Menus />
    )
  }
  function RankList() {
    const { rankList, handleGetRankList } = RankListContainer.useContainer()
    useEffect(
      () => {
        handleGetRankList()
      }, []
    )
    const [row, setRow] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const props: MiddlewareProps = {
      View: RankDisplay,
      row,
      data: rankList,
      type: 'classes',
      actions: {
        open: () => {
          setRow(row + 1)
          setIsOpen(true)
        },
        close: () => {
          setRow(row - 1)
          setIsOpen(false)
        }
      },
      Pagination: HomeButtons,
      isOpen
    }
    const Ranks = MiddlewareViewPagination(props)
    return (
      <Ranks />
    )
  }
  function SingerList() {
    const { singerClassify, handleGetSingerClassify } = SingerClassifyContainer.useContainer()
    useEffect(
      () => {
        handleGetSingerClassify()
      }, []
    )
    const [row, setRow] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const props: MiddlewareProps = {
      View: ClassesDisplay,
      row,
      data: singerClassify,
      type: 'singers',
      actions: {
        open: () => {
          setRow(row + 1)
          setIsOpen(true)
        },
        close: () => {
          setRow(row - 1)
          setIsOpen(false)
        }
      },
      Pagination: HomeButtons,
      isOpen
    }
    const Singers = MiddlewareViewPagination(props)
    return (
      <Singers />
    )
  }
  return (
    <MGraid container spacing={3}>
      <MGraid item xs={12}>
        <MTypography component="h1" className={classes.h1}>
          最新歌曲
          <Link to="/newsongs">
            <MIconButton className={classes.moreButton}>
              <MMoreIcon />
            </MIconButton>
          </Link>
        </MTypography>
        <MGraid container>
          <NewSongs />
        </MGraid>
      </MGraid>
      <MGraid item xs={12}>
        <MTypography component="h1" className={classes.h1}>
          歌单推荐
          <Link to="/menulist">
            <MIconButton className={classes.moreButton}>
              <MMoreIcon />
            </MIconButton>
          </Link>
        </MTypography>
        <MGraid item>
          <MenuList />
        </MGraid>
      </MGraid>
      <MGraid item xs={12}>
        <MTypography component="h1" className={classes.h1}>
          歌曲排行榜
          <Link to="/rank/songs">
            <MIconButton className={classes.moreButton}>
              <MMoreIcon />
            </MIconButton>
          </Link>
        </MTypography>
        <MGraid item>
          <RankList />
        </MGraid>
      </MGraid>
      <MGraid item xs={12}>
        <MTypography component="h1" className={classes.h1}>
          歌手分类
          <Link to="/class/singer">
            <MIconButton className={classes.moreButton}>
              <MMoreIcon />
            </MIconButton>
          </Link>
        </MTypography>
        <MGraid item>
          <SingerList />
        </MGraid>
      </MGraid>
    </MGraid>
  )
}