import React, { useEffect, useState, Component } from 'react'
import { MGraid } from '@components/material-ui';
import HomeButtons from '@shared/HomeButtons';

interface Props {
  data: any[]
  Component?: Component
  rowNum: number
  maxPage: number
  close?: number
  open?: number
}

interface Status {
  type: boolean,
  page: number,
}
export default (props: Props) => {
  const [close, open] = [props.close || 1, props.open || 1]
  const [state, setState] = useState({type: false, page: 1})
  const { type, page } = state
  const method: (status: Status) => void = (status: Status) => setState(status)
  const data = {
    type,
    page,
    maxPage: props.maxPage
  }
  return (
    <MGraid container spacing={3}>
      <HomeButtons data={data} method={method} />
    </MGraid>
  )
}