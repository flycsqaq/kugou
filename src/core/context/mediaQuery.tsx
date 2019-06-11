import { useState, Dispatch, useEffect } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createContainer } from "unstated-next"

function MediaQuery() {
  const [size, setSize]: [string, Dispatch<any>] = useState('l')
  const match1200: string = useMediaQuery('(min-width:1400px)').toString();
  const match800: string= useMediaQuery('(min-width:900px)').toString();
  const match600: string = useMediaQuery('(min-width:600px)').toString();
  const judgeMap: any = {
    true: {
      true: {
        true: 'l',
        false: 'l'
      },
      false: {
        true: 'l',
        false: 'l'
      }
    },
    false:{
      true: {
        true: 'm',
        false: 'm'
      },
      false: {
        true: 's',
        false: 'xs'
      }
    },
  }
  useEffect(
    () => {
      setSize(judgeMap[match1200][match800][match600])
    }, [match800, match1200, match600]
  )
  const songMap: any = {
    l: 4,
    m: 3,
    s: 2,
    xs: 1
  }
  const menuMap: any = {
    l: 3,
    m: 2,
    s: 1,
    xs: 1
  }
  const rankMap: any = {
    l: 3,
    m: 2,
    s: 1,
    xs: 1
  }
  const singerMap: any = {
    l: 6,
    m: 4,
    s: 2,
    xs: 2
  }
  const songRowNum = songMap[size]
  const menuRowNum = menuMap[size]
  const rankgRowNum = rankMap[size]
  const singerRowNum = singerMap[size]
  return {
    songs: songRowNum,
    menus: menuRowNum,
    classes: rankgRowNum,
    singers: singerRowNum
  }
}

export const MediaQueryContainer = createContainer(MediaQuery)