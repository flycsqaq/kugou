import React, { useEffect, useState } from 'react'
import { SongRank } from '@models/data'
import { MediaQueryContainer } from '@context/mediaQuery';
import RankBrief from '@shared/RankBrief'
import { MGraid, MTypography, MIconButton, MMoreIcon } from '@components/material-ui';

interface Props {
  data: SongRank[]
}

export default (props: Props) => {
  const { rankgRowNum }: any = MediaQueryContainer.useContainer()
  const num: any = 12 / rankgRowNum

  return (
    <MGraid container spacing={3}>
    {
      props.data.map((rank: SongRank, index: number) => (
      <MGraid key={index} item xs={num}>
        <RankBrief imgurl={rank.imgurl} rankid={rank.rankid} rankname={rank.rankname} intro={rank.intro} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}