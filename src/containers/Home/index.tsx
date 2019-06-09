import React, { useEffect, useState, Dispatch } from 'react'
import { MGraid, MTypography, MIconButton, MMoreIcon } from '@components/material-ui';
import { HomeStyle } from '@styles/Home';
import { Menu, SongRank, SingerClass } from '@models/data';
import { NewSongsContainer } from '@context/newSongs';
import { MenuListContainer } from '@context/menuList';
import { RankListContainer } from '@context/rankList';
import HomeButtons from '@shared/HomeButtons';
import ShMenuBrief from '@shared/MenuBrief';
import ShRankBrief from '@shared/RankBrief';
import ShClassBrief from '@shared/singerClass';
import { SingerClassifyContainer } from '@context/singerClassify';
import { Link } from 'react-router-dom'
import { MediaQueryContainer } from '@context/mediaQuery';
import SongDisplay from '@shared/SongDisplay'
import MenuDisplay from '@shared/MenuDisplay'
import RankDisplay from '@shared/RankDisplay'
import ClassDisplay from '@shared/SingerDisplay'

interface Status {
  type: boolean,
  page: number,
  pagesize: number
}

export default () => {
  const media = MediaQueryContainer.useContainer()
  const mediaMap = {
    l: [4, 3, 6],
    m: [3, 3, 6],
    n: [3, 3, 6]
  }
  useEffect(
    () => {
      console.log(media)
    }, [media]
  )

  const classes = HomeStyle({})

  // newSongs
  let { newSongs, handleGetNewSongs } = NewSongsContainer.useContainer()
  const newRow = 4
  const [newSongStatus, changeNewSongsStatus]: [Status, Dispatch<any>] = useState({type: false, page: 1, pagesize: newRow*2})
  useEffect(
    () => {
      handleGetNewSongs()
    }, []
  )

  function NewSongsDisplay() {
    const { type, page, pagesize } = newSongStatus
    const start: number = pagesize * (page -1)
    const end: number = pagesize * page
    const length: number = newSongs.length
    const method: (status: Status) => void = (status: Status) => changeNewSongsStatus(status)
    const data = {
      type,
      page,
      pagesize,
      length,
      opensize: newRow * 4,
      closesize: newRow * 2
    }
    const itemNum: any = 12 / newRow
    return (
      <MGraid container spacing={3} className={classes.flexPadding}>
        <SongDisplay data={newSongs.slice(start, end)} />
        <HomeButtons data={data} method={method} />
      </MGraid>
    )
  }

  // menuList
  let { menuList, handleGetMenuList } = MenuListContainer.useContainer()
  const menuRow = 3
  const [menuStatus, changeMenuStatus]: [Status, Dispatch<any>] = useState({type: false, page: 1, pagesize: menuRow})

  useEffect(
    () => {
      handleGetMenuList()
    }, []
  )

  function MenuListDisplay() {
    const { type, page, pagesize } = menuStatus
    const start = pagesize * (page -1)
    const end = pagesize * page
    const length = menuList.length
    const method = (status: Status) => changeMenuStatus(status)
    const data = {
      type,
      page,
      pagesize,
      length,
      opensize: menuRow * 2,
      closesize: menuRow
    }
    return (
      <MGraid container className={classes.flexPadding}>
        <MGraid item>
          <MenuDisplay data={menuList.slice(start, end)} />
        </MGraid>
        <HomeButtons data={data} method={method} />
      </MGraid>
    )
  }


  // rankList
  const { rankList, handleGetRankList  } = RankListContainer.useContainer()
  const rankRow = 3
  const [rankStatus, changeRankStatus]: [Status, Dispatch<any>] = useState({type: false, page: 1, pagesize: rankRow})
  useEffect(
    () => {
      handleGetRankList()
    }, []
  )
  // function Rank
  function RankListDisplay() {
    const { type, page, pagesize } = rankStatus
    const start = pagesize * (page -1)
    const end = pagesize * page
    const length = menuList.length
    const method = (status: Status) => changeRankStatus(status)
    const data = {
      type,
      page,
      pagesize,
      length,
      opensize: rankRow * 2,
      closesize: rankRow
    }
    const rankNum: any = 12 / rankRow
    return (
      <MGraid container spacing={3} className={classes.flexPadding}>
        <MGraid item>
          <RankDisplay data={rankList.slice(start, end)} />
        </MGraid>
        <HomeButtons data={data} method={method} />
      </MGraid>
    )
  }

  const {singerClassify,handleGetSingerClassify} = SingerClassifyContainer.useContainer()
  const classRow = 6
  const [singerClassifyStatus, changeSingerClassifyStatus]: [Status, Dispatch<any>] = useState({type: false, page: 1, pagesize: classRow})
  useEffect(
    () => {
      handleGetSingerClassify()
    }, []
  )
  function SingerClassifyDisplay() {
    const { type, page, pagesize } = singerClassifyStatus
    const start = pagesize * (page -1)
    const end = pagesize * page
    const length = singerClassify.length
    const method = (status: Status) => changeSingerClassifyStatus(status)
    const data = {
      type,
      page,
      pagesize,
      length,
      opensize: classRow * 2,
      closesize: classRow
    }
    const classNum: any = 12 / classRow
    return (
      <MGraid container spacing={1} className={classes.flexPadding}>
      <MGraid item>
        <ClassDisplay data={singerClassify.slice(start, end)} />
      </MGraid>
        {/* {singerClassify.slice(start, end).map((singerClass: SingerClass, index: number) => (
          <MGraid item key={index} xs={classNum} className={classes.itemContainer}>
            <ShClassBrief classid={singerClass.classid} classname={singerClass.classname} imgurl={singerClass.imgurl} />
          </MGraid>
        ))} */}
        <HomeButtons data={data} method={method} />
      </MGraid>
    )
  }
  return (
    <MGraid container spacing={1}>
      <MGraid item className={classes.flexContainer}>
        <MTypography className={classes.title} variant="h5" component="h1">
          新歌推荐
          <Link to="/newsongs">
            <MIconButton className={classes.moreButton}>
              <MMoreIcon />
            </MIconButton>
          </Link>
        </MTypography>
        <NewSongsDisplay />
      </MGraid>
      <MGraid item className={classes.flexContainer}>
        <MTypography className={classes.title} variant="h5" component="h1">
          歌单推荐
          <Link to="/menulist">
            <MIconButton className={classes.moreButton}>
              <MMoreIcon />
            </MIconButton>
          </Link>
        </MTypography>
        <MenuListDisplay />
      </MGraid>
      <MGraid item className={classes.flexContainer}>
        <MTypography className={classes.title} variant="h5" component="h1">
          歌曲榜单
          <Link to="/rank/songs">
            <MIconButton className={classes.moreButton}>
              <MMoreIcon />
            </MIconButton>
          </Link>
        </MTypography>
        <RankListDisplay />
      </MGraid>
      <MGraid item className={classes.flexContainer}>
        <MTypography className={classes.title} variant="h5" component="h1">
          歌手分类
          <Link to="/class/singer">
            <MIconButton className={classes.moreButton}>
              <MMoreIcon />
            </MIconButton>
          </Link>
        </MTypography>
        <SingerClassifyDisplay />
      </MGraid>
    </MGraid>
  )
}