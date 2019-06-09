import React, { useEffect, useState, Dispatch } from 'react'
import { getSingerClassSingerList } from '@services/api'
import { SingerListRes } from '@models/response';
import { SingerBrief } from '@models/data';
import { MGraid, MTypography } from '@components/material-ui'
import { HomeStyle } from '@styles/Home'
import { MediaQueryContainer } from '@context/mediaQuery';
import SingerDisplay from '@shared/display/SingerDisplay'
import { MiddlewareProps } from '@models/components';
import MiddlewareViewPagination from '@shared/middleware/viewspagination';
import ViewButtons from '@shared/pagination/ViewButtons'

interface Props {
  match: any
}

export default (props: Props) => {
  const classes = HomeStyle({})
  const [singers, setSingers]: [SingerBrief[], Dispatch<any>] = useState([])
  const [title, setTitle]: [string, Dispatch<any>] = useState('')
  useEffect(
    () => {
      getSingerClassSingerList(props.match.params.id)
        .then((res: SingerListRes) => {
          setSingers(res.data.data.singers.list.info)
          setTitle(res.data.data.classname)
        })
    }, [props.match.params.id]
  )

  const { menus } = MediaQueryContainer.useContainer()
  const [row, setRow] = useState(3)
  const [isOpen, setOpen] = useState(false)
  useEffect(
    () => {
      if (menus * row >= singers.length) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }, [menus, row, singers]
  )
  const propss: MiddlewareProps = {
    View: SingerDisplay,
    row,
    data: singers,
    type: 'menus',
    actions: {
      open: () => {
        setRow(row + 3)
      },
    },
    Pagination: ViewButtons,
    isOpen
  }
  const Singers = MiddlewareViewPagination(propss)

  return (
    <MGraid container spacing={3}>
    <MGraid item xs={12}>
      <MTypography component="h1" className={classes.h1}>
        {title}
      </MTypography>
      <MGraid container>
        <Singers />
      </MGraid>
    </MGraid>
  </MGraid>
  )
}