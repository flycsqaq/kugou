import { useState, Dispatch } from 'react'
import { createContainer } from "unstated-next"
import { Menu } from '@models/data';
import { MenuListRes } from '@models/response';
import { getMenuList } from '@services/api';

export function MenuList() {
  const [menuList, setMenuList]: [Menu[], Dispatch<any>] = useState([])
  const changeMenuList = (menuList:Menu[] = []) => setMenuList(menuList)
  const handleGetMenuList = () => new Promise((resolve, reject) => {
    getMenuList().then((res: MenuListRes) => {
      const data: Menu[] = res.data.data.list.info
      changeMenuList(data)
      resolve(data)
    })
  })
  return {
    menuList,
    handleGetMenuList
  }
}

export const MenuListContainer = createContainer(MenuList)