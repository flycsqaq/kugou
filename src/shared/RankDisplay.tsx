import React, { useEffect, useState } from 'react'
import { SongRank } from '@models/data'
import { MediaQueryContainer } from '@context/mediaQuery';
import RankBrief from '@shared/RankBrief'
import { MGraid, MTypography, MIconButton, MMoreIcon } from '@components/material-ui';

interface Props {
  data: SongRank[]
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
      props.data.slice(start * judgeMap[size], end * judgeMap[size]).map((rank: SongRank) => (
      <MGraid item xs={num}>
        <RankBrief imgurl={rank.imgurl} rankid={rank.rankid} rankname={rank.rankname} intro={rank.intro} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}