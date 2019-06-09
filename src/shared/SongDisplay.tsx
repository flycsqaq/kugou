import React from 'react'
import { MediaQueryContainer } from '@context/mediaQuery';
import { MGraid } from '@components/material-ui';
import { SongBrief } from '@models/data';
import ShSong from '@shared/SongBrief'

interface Props {
  data: SongBrief[]
  start: number
}

const SongDisplay = (props: Props) => {
  const { songRowNum }: any = MediaQueryContainer.useContainer()
  const num: any = 12 / songRowNum
  const { start, data } = props
  return (
    <MGraid container spacing={3}>
    {
      data.map((song: SongBrief, index: number) => (
        <MGraid key={index} xs={num} item>
          <ShSong index={index + start + 1} hash={song.hash} filename={song.filename} />
        </MGraid>
      ))
    }
    </MGraid>
  )
}

export default SongDisplay