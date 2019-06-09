import React, { useState, useEffect } from 'react'
import { MGraid, MTypography, MIconButton, MMoreIcon } from '@components/material-ui';
import { MediaQueryContainer } from '@context/mediaQuery';
import ShMenuBrief from '@shared/MenuBrief'
import { Menu } from '@models/data';

interface Props {
  data: Menu[]
}

export default (props: Props) => {
  const { menuRowNum } = MediaQueryContainer.useContainer()
  const num: any = 12 / menuRowNum

  return (
    <MGraid container spacing={3}>
    {
      props.data.map((menu: Menu, index: number) => (
      <MGraid key={index} item xs={num}>
        <ShMenuBrief imgurl={menu.imgurl} specialid={menu.specialid} specialname={menu.specialname} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}