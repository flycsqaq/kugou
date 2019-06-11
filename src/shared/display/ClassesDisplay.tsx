import React from 'react'
import { MGraid } from '@components/material-ui';
import ShClassBrief from '@shared/simple/singerClass'
import { SingerClass } from '@models/data';
import { ViewProps } from '@models/components';
import { ClassDisplayStyle } from '@styles/display/singerClass'

export default (props: ViewProps) => {
  const classes = ClassDisplayStyle({})
  const { data, number } = props
  return (
    <MGraid container spacing={3}>
    {
      data.map((singerclass: SingerClass, index: number) => (
      <MGraid key={index} item xs={number} className={classes.item}>
        <ShClassBrief imgurl={singerclass.imgurl} classid={singerclass.classid} classname={singerclass.classname} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}