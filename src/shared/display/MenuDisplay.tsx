import React from 'react'
import { MGraid } from '@components/material-ui';
import ShMenuBrief from '@shared/simple/MenuBrief'
import { Menu } from '@models/data';
import { ViewProps } from '@models/components';

const MenuDisplay = (props: ViewProps) => {
  const { data, number } = props
  return (
    <MGraid container spacing={3}>
    {
      data.map((menu: Menu, index: number) => (
      <MGraid key={index} item xs={number}>
        <ShMenuBrief imgurl={menu.imgurl} specialid={menu.specialid} specialname={menu.specialname} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}

export default MenuDisplay