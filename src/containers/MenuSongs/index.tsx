import React, { useEffect, useState, Dispatch } from 'react'
import { getMenuSongs } from '@services/api'
import { MenuSongsRes } from '@models/response';
import { SongBrief, Menu } from '@models/data';
import { MenuListContainer } from '@context/menuList'
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

  const { menuList, handleGetMenuList } = MenuListContainer.useContainer()
  const [$songs, setSongs]: [SongBrief[], Dispatch<any>] = useState([])
  const [title, setTitle]: [string, Dispatch<any>] = useState('')
  useEffect(
    () =>{
      getMenuSongs(props.match.params.id)
        .then((res: MenuSongsRes) => {
          setSongs(res.data.data.list.info)
        })
    }, [props.match.params.id]
  )
  // title
  useEffect(
    () => {
      function getName(input: any) {
        const id = Number(props.match.params.id)
        const menuObj: Menu | undefined = input.find((menu: Menu) => {
          return menu.specialid === id
        })
        let title = ''
        if (menuObj) {
          title = menuObj.specialname
        }
        return title
      }
      if (menuList.length === 0) {
        handleGetMenuList()
          .then((res: any) => {
            setTitle(getName(res))
          })
      } else {
        setTitle(getName(menuList))
      }
    }, []
  )
  // pagination
  const [row, setRow] = useState(4)
  const [isOpen, setOpen] = useState(false)
  useEffect(
    () => {
      if (songs * row >= $songs.length) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, [$songs, row, songs]
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