import React from 'react'
import { MPaper, MTypography, MIconButton, MPlayArrow } from '@components/material-ui'
import { SongStyle } from '@styles//shared/song'
interface Props {
  hash: string
  filename: string
  cover?: string
  index?: number
}

export default (props: Props) => {
  const classes = SongStyle({})
  if (props.cover) {
    return (
      <div>none</div>
    )
  } else {
    return (
      <MPaper className={classes.paper}>
        <MTypography>
          {props.index || ''} - {props.filename}
        </MTypography>
        <MIconButton>
          <MPlayArrow />
        </MIconButton>
      </MPaper>
    )
  }
}