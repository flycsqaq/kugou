import React from 'react'
import { HomeStyle } from '@styles/Home';


interface Status {
  type: boolean,
  page: number,
  pagesize: number
}

interface Data extends Status {
  length: number
  opensize: number
  closesize: number
}

interface Props {
  data: Data
  method: (status: Status) => void
}

export default (props: Props) => {
  const classes = HomeStyle({})
  function Buttons() {
    const { type, page, pagesize, length, opensize, closesize } = props.data
    const start = pagesize * (page -1)
    const end = pagesize * page
    if (type) {
      return (
        <React.Fragment>
          <button className={classes.footerButton} onClick={() => props.method({type: false, page, pagesize: closesize})}>close</button>
          {
            start > 0?
            <button className={classes.leftButtom} onClick={() => props.method({type, page: page - 1, pagesize})}>before</button>:
            null
          }
          {
            end <= length?
            <button className={classes.rightButtom} onClick={() => props.method({type, page: page + 1, pagesize})}>next</button>:
            null
          }
        </React.Fragment>
      )
    }
    return (
      <button className={classes.footerButton} onClick={() => props.method({type: true, page, pagesize: opensize})}>open</button>
    )
  }
  return (
    <Buttons />
  )
}