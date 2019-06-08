import React, { useEffect, useState, Dispatch } from 'react'
import { getMenuSongs } from '@services/api'
import { MenuSongsRes } from '@models/response';
import { SongBrief, Menu } from '@models/data';
import Songs from '@shared/Songs'
import { MenuListContainer } from '@context/menuList'
interface Props {
  match: any
}

export default (props: Props) => {
  const { menuList, handleGetMenuList } = MenuListContainer.useContainer()
  const [songs, setSongs]: [SongBrief[], Dispatch<any>] = useState([])
  const [title, setTitle]: [string, Dispatch<any>] = useState('')
  useEffect(
    () =>{
      getMenuSongs(props.match.params.id)
        .then((res: MenuSongsRes) => {
          setSongs(res.data.data.list.info)
        })
    }, [props.match.params.id]
  )
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
  return (
    <Songs data={songs} title={title} />
  )
}