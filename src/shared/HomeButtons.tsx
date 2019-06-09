import React from 'react'
import { HomeStyle } from '@styles/Home';
import { MArrowLeft, MArrowRight, MArrowDropDown, MArrowDropUp, MIconButton } from '@components/material-ui'

interface Status {
  type: boolean,
  page: number,
}

interface Data extends Status {
  maxPage: number
}

interface Props {
  data: Data
  method: (status: Status) => void
}

export default (props: Props) => {
  const classes = HomeStyle({})
  function Buttons() {
    const { type, page, maxPage } = props.data
    if (type) {
      return (
        <React.Fragment>
          <div className={classes.footerContainer}>
            <MIconButton className={classes.footerButton} onClick={() => props.method({type: false, page})}>
              <MArrowDropUp />
            </MIconButton>
          </div>
          {
            page > 1?
            <div className={`${classes.LRContainer} ${classes.leftButtom}`}>
              <MIconButton onClick={() => props.method({type, page: page - 1})}>
                <MArrowLeft />
              </MIconButton>
            </div>:
            null
          }
          {
            page < maxPage?
            <div className={`${classes.LRContainer} ${classes.rightButtom}`}>
              <MIconButton onClick={() => props.method({type, page: page + 1})}>
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
        <MIconButton className={classes.footerButton} onClick={() => props.method({type: true, page})}>
          <MArrowDropDown />
        </MIconButton>
      </div>
    )
  }
  return (
    <Buttons />
  )
}