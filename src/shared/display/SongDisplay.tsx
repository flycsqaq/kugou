import React from 'react'
import { MGraid } from '@components/material-ui';
import { SongBrief } from '@models/data';
import ShSong from '@shared/simple/SongBrief'
import { ViewProps } from '@models/components';

const SongDisplay = (props: ViewProps) => {
  const { data, start, number } = props
  return (
    <MGraid container spacing={3}>
    {
      data.map((song: SongBrief, index: number) => (
        <MGraid key={index} xs={number} item>
          <ShSong index={index + start + 1} hash={song.hash} filename={song.filename} />
        </MGraid>
      ))
    }
    </MGraid>
  )
}

export default SongDisplay