import React, { useState } from 'react'
import { MGraid, MTypography, MIconButton, MArrowDropDown } from '@components/material-ui';
import { SongBrief } from '@models/data';
import ShSong from '@shared/SongBrief'
import { SongStyle } from '@styles/shared/song'

interface Props {
  data: SongBrief[]
  title?: string
}

const Songs = (props: Props) => {
  const classes = SongStyle({})
  const counter = 4
  const num: any = 12 / counter
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
        <MGraid className={classes.songContainer} container spacing={3}>
          {props.data.slice(0, row * counter).map((song: SongBrief, index: number) => (
            <MGraid item key={index} xs={num}>
              <ShSong index={index + 1} hash={song.hash} filename={song.filename} />
            </MGraid>
          ))}
        </MGraid>
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