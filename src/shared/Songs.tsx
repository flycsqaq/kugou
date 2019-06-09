import React, { useState } from 'react'
import { MGraid, MTypography, MIconButton, MArrowDropDown } from '@components/material-ui';
import { SongBrief } from '@models/data';
import { SongStyle } from '@styles/shared/song'
import SongDisplay from '@shared/SongDisplay'

interface Props {
  data: SongBrief[]
  title?: string
}

const Songs = (props: Props) => {
  const classes = SongStyle({})
  const counter = 4
  const baseRow = 4
  const [row, setRow] = useState(baseRow)
  return (
    <MGraid className={classes.root} container spacing={3}>
      <MGraid item>
        <MTypography variant="h5" component="h1">
          {props.title || ''}
        </MTypography>
      </MGraid>
      <MGraid item>
        <SongDisplay data={props.data.slice(0, row * counter)} />
      </MGraid>
      {
        props.data.length >= row * counter?
        <MGraid className={classes.openButton} item>
          <MIconButton onClick={() => setRow(row * (row + baseRow))}>
            <MArrowDropDown />
          </MIconButton>
        </MGraid>:
        null
      }
    </MGraid>
  )
}

export default Songs