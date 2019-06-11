import React, { useEffect, useState, Dispatch } from 'react'
import { getSingerInfo } from '@services/api';
import { SingerInfoRes } from '@models/response'
import { SingerDetail, SongBrief } from '@models/data';
import { MGraid, MTypography } from '@components/material-ui'
import { changeImgUrl } from '@utils/imgUrl';
import { breakLine } from '@utils/break'
import { MediaQueryContainer } from '@context/mediaQuery';
import SongDisplay from '@shared/display/SongDisplay'
import { MiddlewareProps } from '@models/components';
import ViewButtons from '@shared/pagination/ViewButtons'
import MiddlewareViewPagination from '@shared/middleware/viewspagination';
interface Props { 
  match:any
}

export default (props: Props) => {
  const initDetail: SingerDetail = {
    singerid: 0,
    intro: '',
    imgurl: '',
    profile: '',
    singername: ''
  }
  const { songs } = MediaQueryContainer.useContainer()

  const [singer, setSinger]: [SingerDetail, Dispatch<any>] = useState(initDetail)
  const [singersongs, setSongs]: [SongBrief[], Dispatch<any>] = useState([])
  useEffect(
    () => {
      getSingerInfo(props.match.params.id)
        .then((res: SingerInfoRes) => {
          setSinger(res.data.data.info)
          setSongs(res.data.data.songs.list)
        })
    }, [props.match.params.id]
  )
  useEffect(
    () => {
      window.scrollTo(0,0)
    }, []
  )
  const [row, setRow] = useState(4)
  const [isOpen, setOpen] = useState(false)
  useEffect(
    () => {
      if (songs * row >= singersongs.length) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, [singersongs, row, songs]
  )
  const propss: MiddlewareProps = {
    View: SongDisplay,
    row,
    data: singersongs,
    type: 'songs',
    actions: {
      open: () => {
        setRow(row + 4)
      }
    },
    Pagination: ViewButtons,
    isOpen
  }
  const Songs = MiddlewareViewPagination(propss)
  return (
    <MGraid container spacing={3}>
      <MGraid item xs={12}>
        <MTypography component={"h1"}>
          {singer.singername}
        </MTypography>
        <img 
          src={changeImgUrl(singer.imgurl)}
          srcSet={`${changeImgUrl(singer.imgurl, 240)} 240w,
                   ${changeImgUrl(singer.imgurl, 480)} 480w`}
          sizes={`(max-width: 400px) 220px,
                  (max-width: 9999px) 300px`}
        />
        {
          breakLine(singer.intro).map((str: string, index: number) => (
            <MTypography key={index} className={"pre"}>
              {str}
            </MTypography>
          ))
        }
      </MGraid>
      <MGraid item xs={12}>
        <MTypography component="h1">
          歌曲
        </MTypography>
      </MGraid>
      <MGraid  item>
        <MGraid container>
          <Songs />
        </MGraid>
      </MGraid>
    </MGraid>
  )
}