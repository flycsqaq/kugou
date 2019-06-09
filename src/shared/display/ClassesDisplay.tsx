import React from 'react'
import { MGraid } from '@components/material-ui';
import ShClassBrief from '@shared/simple/singerClass'
import { SingerClass } from '@models/data';
import { ViewProps } from '@models/components';

export default (props: ViewProps) => {
  const { data, number } = props
  return (
    <MGraid container spacing={3}>
    {
      data.map((singerclass: SingerClass, index: number) => (
      <MGraid key={index} item xs={number}>
        <ShClassBrief imgurl={singerclass.imgurl} classid={singerclass.classid} classname={singerclass.classname} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}