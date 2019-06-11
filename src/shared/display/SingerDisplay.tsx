import React from 'react'
import { MGraid } from '@components/material-ui';
import ShSingerBrief from '@shared/simple/SingerBrief'
import { SingerBrief } from '@models/data';
import { ViewProps } from '@models/components';
import { MenuDisplayStyle } from '@styles/display/menu'

export default (props: ViewProps) => {
  const classes = MenuDisplayStyle({})

  const { data, number } = props
  return (
    <MGraid container spacing={3}>
    {
      data.map((singer: SingerBrief, index: number) => (
      <MGraid key={index} item xs={number} className={classes.item}>
        <ShSingerBrief imgurl={singer.imgurl} singerid={singer.singerid} singername={singer.singername} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}