import React, { useEffect, useState } from 'react'
import { MediaQueryContainer } from '@context/mediaQuery';
import { MGraid } from '@components/material-ui';
import { SongBrief } from '@models/data';
import ShSong from '@shared/SongBrief'

interface Props {
  data: SongBrief[]
}

export default (props: Props) => {
  const size: any = MediaQueryContainer.useContainer()
  const judgeMap: any = {
    l: 4,
    m: 3,
    s: 2
  }
  const [[start, end], setRow] = useState([0,1])
  const [num, setNum]: [any, any] = useState(12 / judgeMap[size])
  useEffect(
    () => {
      setNum(12 / judgeMap[size])
    }, [size]
  )
  return (
    <MGraid container spacing={3}>
    {
      props.data.slice(start * judgeMap[size], end * judgeMap[size]).map((song: SongBrief, index: number) => (
        <MGraid key={index} xs={num} item>
          <ShSong index={index + 1} hash={song.hash} filename={song.filename} />
        </MGraid>
      ))
    }
    </MGraid>
  )
}