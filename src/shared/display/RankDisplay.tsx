import React from 'react'
import { SongRank } from '@models/data'
import RankBrief from '@shared/simple/RankBrief'
import { MGraid } from '@components/material-ui';
import { ViewProps } from '@models/components';

export default (props: ViewProps) => {
  const { data, number } = props

  return (
    <MGraid container spacing={3}>
    {
      data.map((rank: SongRank, index: number) => (
      <MGraid key={index} item xs={number}>
        <RankBrief imgurl={rank.imgurl} rankid={rank.rankid} rankname={rank.rankname} intro={rank.intro} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}