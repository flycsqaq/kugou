import React from 'react'
import { MGraid } from '@components/material-ui';
import { MediaQueryContainer } from '@context/mediaQuery';
import ShClassBrief from '@shared/singerClass'
import { SingerClass } from '@models/data';

interface Props {
  data: SingerClass[]
}

export default (props: Props) => {
  const { singerRowNum }: any = MediaQueryContainer.useContainer()
  const num: any = 12 / singerRowNum

  return (
    <MGraid container spacing={3}>
    {
      props.data.map((singerclass: SingerClass, index: number) => (
      <MGraid key={index} item xs={num}>
        <ShClassBrief imgurl={singerclass.imgurl} classid={singerclass.classid} classname={singerclass.classname} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}