import React, { useEffect, useState, Dispatch, useRef } from 'react'
import { MGraid, MTypography, MIconButton, MMoreIcon } from '@components/material-ui';
import { HomeStyle } from '@styles/Home';
import { NewSongsContainer } from '@context/newSongs';
import { MenuListContainer } from '@context/menuList';
import { RankListContainer } from '@context/rankList';
import HomeButtons from '@shared/HomeButtons';
import { SingerClassifyContainer } from '@context/singerClassify';
import { Link } from 'react-router-dom'
import SongDisplay from '@shared/SongDisplay'
import MenuDisplay from '@shared/MenuDisplay'
import RankDisplay from '@shared/RankDisplay'
import ClassDisplay from '@shared/SingerDisplay'
import { MediaQueryContainer } from '@context/mediaQuery';

interface Status {
  type: boolean,
  page: number,
  pagerow: number
}

export default () => {
  const classes = HomeStyle({})
  const {
    songRowNum,
    menuRowNum,
    rankgRowNum,
    singerRowNum
  }: any = MediaQueryContainer.useContainer()

  // newSongs
  let { newSongs, handleGetNewSongs } = NewSongsContainer.useContainer()
  const [newSongsCloseRow, newSongsOpenRow] = [2, 4]
  const [newSongsStatus, changeNewSongsStatus]: [Status, Dispatch<any>] = useState({type: false, page: 1, pagerow: newSongsCloseRow})

  useEffect(
    () => {
      handleGetNewSongs()
    }, []
  )
  function NewSongsDisplay() {
    const { type, page, pagerow } = newSongsStatus
    const start: number = pagerow * songRowNum * (page -1)
    const end: number = pagerow * songRowNum * page
    const length: number = newSongs.length
    const method: (status: Status) => void = (status: Status) => changeNewSongsStatus(status)
    const data = {
      type,
      page,
      pagerow,
      openrow: newSongsOpenRow,
      closerow: newSongsCloseRow,
      maxRow: Math.ceil(length / songRowNum)
    }
    return (
      <MGraid container spacing={3} className={classes.flexPadding}>
        <SongDisplay start={start} data={newSongs.slice(start, end)} />
        <HomeButtons data={data} method={method} />
      </MGraid>
    )
  }

  // // menuList
  // let { menuList, handleGetMenuList } = MenuListContainer.useContainer()
  // const [menuCloseRow, menuOpenRow] = [1, 2]
  // const [menuStatus, changeMenuStatus]: [Status, Dispatch<any>] = useState({type: false, page: 1, pagerow: menuCloseRow})

  // useEffect(
  //   () => {
  //     handleGetMenuList()
  //   }, []
  // )

  // function MenuListDisplay() {
  //   const { type, page, pagerow } = menuStatus
  //   const start: number = pagerow * menuRowNum * (page -1)
  //   const end: number = pagerow * menuRowNum * page
  //   const length = menuList.length
  //   const method: (status: Status) => void = (status: Status) => changeMenuStatus(status)
  //   const data = {
  //     type,
  //     page,
  //     pagerow,
  //     openrow: menuOpenRow,
  //     closerow: menuCloseRow,
  //     maxRow: Math.ceil(length / menuRowNum)
  //   }
  //   return (
  //     <MGraid container className={classes.flexPadding}>
  //       <MGraid item>
  //         <MenuDisplay data={menuList.slice(start, end)} />
  //       </MGraid>
  //       <HomeButtons data={data} method={method} />
  //     </MGraid>
  //   )
  // }


  // // rankList
  // const { rankList, handleGetRankList  } = RankListContainer.useContainer()
  // const [rankCloseRow, rankOpenRow] = [1, 2]  
  // const [rankStatus, changeRankStatus]: [Status, Dispatch<any>] = useState({type: false, page: 1, pagerow: rankCloseRow})
  // useEffect(
  //   () => {
  //     handleGetRankList()
  //   }, []
  // )
  // // function Rank
  // function RankListDisplay() {
  //   const { type, page, pagerow } = rankStatus
  //   const start: number = pagerow * rankgRowNum * (page -1)
  //   const end: number = pagerow * rankgRowNum * page
  //   const length: number = rankList.length
  //   const method: (status: Status) => void = (status: Status) => changeRankStatus(status)
  //   const data = {
  //     type,
  //     page,
  //     pagerow,
  //     openrow: rankOpenRow,
  //     closerow: rankCloseRow,
  //     maxRow: Math.ceil(length / rankgRowNum)
  //   }
  //   return (
  //     <MGraid container spacing={3} className={classes.flexPadding}>
  //       <MGraid item>
  //         <RankDisplay data={rankList.slice(start, end)} />
  //       </MGraid>
  //       <HomeButtons data={data} method={method} />
  //     </MGraid>
  //   )
  // }

  // const {singerClassify,handleGetSingerClassify} = SingerClassifyContainer.useContainer()
  // const [classCloseRow, classOpenRow] = [1, 2]  
  // const [singerClassifyStatus, changeSingerClassifyStatus]: [Status, Dispatch<any>] = useState({type: false, page: 1, pagerow: classCloseRow})
  // useEffect(
  //   () => {
  //     handleGetSingerClassify()
  //   }, []
  // )
  // function SingerClassifyDisplay() {
  //   const { type, page, pagerow } = singerClassifyStatus
  //   const start: number = pagerow * singerRowNum * (page -1)
  //   const end: number = pagerow * singerRowNum * page
  //   const length: number = singerClassify.length
  //   const method: (status: Status) => void = (status: Status) => changeSingerClassifyStatus(status)
  //   const data = {
  //     type,
  //     page,
  //     pagerow,
  //     openrow: classOpenRow,
  //     closerow: classCloseRow,
  //     maxRow: Math.ceil(length / singerRowNum)
  //   }
  //   return (
  //     <MGraid container spacing={1} className={classes.flexPadding}>
  //     <MGraid item>
  //       <ClassDisplay data={singerClassify.slice(start, end)} />
  //     </MGraid>
  //       <HomeButtons data={data} method={method} />
  //     </MGraid>
  //   )
  // }
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
      {/* <MGraid item className={classes.flexContainer}>
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
      </MGraid> */}
    </MGraid>
  )
}