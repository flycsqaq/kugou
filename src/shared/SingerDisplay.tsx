import React, { useState, useEffect } from 'react'
import { MGraid, MTypography, MIconButton, MMoreIcon } from '@components/material-ui';
import { MediaQueryContainer } from '@context/mediaQuery';
import ShClassBrief from '@shared/singerClass'
import { SingerClass } from '@models/data';

interface Props {
  data: SingerClass[]
}

export default (props: Props) => {
  const size: any = MediaQueryContainer.useContainer()
  const judgeMap: any = {
    l: 6,
    m: 4,
    s: 2
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
      props.data.slice(start * judgeMap[size], end * judgeMap[size]).map((singerclass: SingerClass) => (
      <MGraid item xs={num}>
        <ShClassBrief imgurl={singerclass.imgurl} classid={singerclass.classid} classname={singerclass.classname} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}