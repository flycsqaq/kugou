import React, { useState, useEffect } from 'react'
import { MGraid, MTypography, MIconButton, MMoreIcon } from '@components/material-ui';
import { MediaQueryContainer } from '@context/mediaQuery';
import ShMenuBrief from '@shared/MenuBrief'
import { Menu } from '@models/data';

interface Props {
  data: Menu[]
}

export default (props: Props) => {
  const size: any = MediaQueryContainer.useContainer()
  const judgeMap: any = {
    l: 3,
    m: 2,
    s: 1
  }
  const [[start, end], setRow] = useState([0,1])
  const [num, setNum]: [any, any] = useState(12 / judgeMap[size])
  useEffect(
    () => {
      setNum(12 / judgeMap[size])
    }, [size]
  )
  return (
    <MGraid container spacing={3}>
    {
      props.data.slice(start * judgeMap[size], end * judgeMap[size]).map((menu: Menu) => (
      <MGraid item xs={num}>
        <ShMenuBrief imgurl={menu.imgurl} specialid={menu.specialid} specialname={menu.specialname} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}