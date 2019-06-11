import React from 'react'
import { MGraid } from '@components/material-ui';
import ShMenuBrief from '@shared/simple/MenuBrief'
import { Menu } from '@models/data';
import { ViewProps } from '@models/components';
import { MenuDisplayStyle } from '@styles/display/menu'

const MenuDisplay = (props: ViewProps) => {
  const classes = MenuDisplayStyle({})
  const { data, number } = props
  return (
    <MGraid container spacing={3}>
    {
      data.map((menu: Menu, index: number) => (
      <MGraid key={index} item xs={number} className={classes.item}>
        <ShMenuBrief imgurl={menu.imgurl} specialid={menu.specialid} specialname={menu.specialname} />
      </MGraid>
      ))
    }
    </MGraid>
  )
}

export default MenuDisplay