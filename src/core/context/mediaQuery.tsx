import { useState, Dispatch, useEffect } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createContainer } from "unstated-next"

function MediaQuery() {
  const [size, setSize]: [string, Dispatch<any>] = useState('l')
  const match1200 = useMediaQuery('(min-width:1200px)');
  const match800 = useMediaQuery('(min-width:800px)');
  const map1 = new Map()
  const map2 = new Map()
  map1.set(true, 'l')
  map1.set(false, 'l')
  map2.set(true, 'm')
  map2.set(false, 's')
  const judgeMap = new Map()
  judgeMap.set(true, map1)
  judgeMap.set(false, map2)

  useEffect(
    () => {
      setSize(judgeMap.get(match1200).get(match800))
    }, [match800, match1200]
  )
  return size
}

export const MediaQueryContainer = createContainer(MediaQuery)