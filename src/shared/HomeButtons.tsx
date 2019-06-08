import React from 'react'
import { HomeStyle } from '@styles/Home';
import { MArrowLeft, MArrowRight, MArrowDropDown, MArrowDropUp, MIconButton } from '@components/material-ui'

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
          <div className={classes.footerContainer}>
            <MIconButton className={classes.footerButton} onClick={() => props.method({type: false, page, pagesize: closesize})}>
              <MArrowDropUp />
            </MIconButton>
          </div>
          {
            start > 0?
            <div className={`${classes.LRContainer} ${classes.leftButtom}`}>
              <MIconButton onClick={() => props.method({type, page: page - 1, pagesize})}>
                <MArrowLeft />
              </MIconButton>
            </div>:
            null
          }
          {
            end <= length?
            <div className={`${classes.LRContainer} ${classes.rightButtom}`}>
              <MIconButton onClick={() => props.method({type, page: page + 1, pagesize})}>
                <MArrowRight />
              </MIconButton>
            </div>:
            null
          }
        </React.Fragment>
      )
    }
    return (
      <div className={classes.footerContainer}>
        <MIconButton className={classes.footerButton} onClick={() => props.method({type: true, page, pagesize: opensize})}>
          <MArrowDropDown />
        </MIconButton>
      </div>
    )
  }
  return (
    <Buttons />
  )
}