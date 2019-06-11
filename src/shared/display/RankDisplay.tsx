import React from 'react'
import { SongRank } from '@models/data'
import RankBrief from '@shared/simple/RankBrief'
import { MGraid } from '@components/material-ui';
import { ViewProps } from '@models/components';
import { RankDisplayStyle } from '@styles/display/rank'

export default (props: ViewProps) => {
  const classes = RankDisplayStyle({})
  const { data, number } = props

  return (
    <MGraid container spacing={3}>
    {
      data.map((rank: SongRank, index: number) => (
      <MGraid key={index} item xs={number} className={classes.item}>
        <RankBrief imgurl={rank.imgurl} rankid={rank.rankid} rankname={rank.rankname} intro={rank.intro} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}