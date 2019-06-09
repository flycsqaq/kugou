import React, { useEffect, useState, Dispatch } from 'react'
import { MiddlewareProps, PaginationProps } from '@models/components';
import { MediaQueryContainer } from '@context/mediaQuery';
import { ViewProps, Xs } from '@models/components';
import { MiddleStyle } from '@styles/middleware';
import { MGraid } from '@components/material-ui'

const MiddlewareViewPagination = ({ isOpen, data, type, row, actions, View, Pagination }: MiddlewareProps) => {
  const classes = MiddleStyle({})
  const mediaQuery = MediaQueryContainer.useContainer()
  const rowNum: Xs = mediaQuery[type] // 每行几项数据，传递到Views
  const [start, setStart]: [number, Dispatch<any>] = useState(0)
  // const [dataShow, setDataShow]: [any[], Dispatch<any>] = useState([])
  const dataShow = data.slice(start, start + rowNum * row)
  // useEffect(
  //   () => {
  //     setDataShow(data.slice(start, start + rowNum * row))
  //   }, [rowNum, row, data, start]
  // )
  const number: any = 12 / rowNum
  const viewProps: ViewProps = {
    data: dataShow,
    start,
    number
  }
  const back = start - rowNum * row
  const next = start + rowNum * row
  const paginationProps: PaginationProps = {
    actions: {
      back: () => {
        setStart(back)
      },
      next: () => {
        setStart(next)
      },
      open: () => actions.open(),
      close: () => actions.close()
    },
    canBack: start > 0,
    canNext: next < data.length,
    isOpen: isOpen || false,
  }
  return () => {
    return (
      <MGraid item className={classes.root}>
        <View {...viewProps} />
        <Pagination {...paginationProps} />
      </MGraid>
    )
  }
}

export default MiddlewareViewPagination