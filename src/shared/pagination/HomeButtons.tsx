import React from 'react'
import { MArrowLeft, MArrowRight, MArrowDropDown, MArrowDropUp, MIconButton } from '@components/material-ui'
import { PaginationStyle } from '@styles/pagination';
import { PaginationProps } from '@models/components';

export default (props: PaginationProps) => {
  const classes = PaginationStyle({})
  const {
    actions,
    canBack,
    canNext,
    isOpen,
  } = props
  return (
    <React.Fragment>
      {
        isOpen?
        <div className={classes.footer}>
          <MIconButton onClick={() => actions.close && actions.close()}>
            <MArrowDropUp />
          </MIconButton>
        </div>:
        null
      }
      {
        !isOpen?
        <div className={classes.footer}>
          <MIconButton onClick={() => actions.open && actions.open()}>
            <MArrowDropDown />
          </MIconButton>
        </div>:
        null
      }
      {
        canBack?
        <div className={classes.left}>
          <MIconButton onClick={() => actions.back && actions.back()}>
            <MArrowLeft />
          </MIconButton>
        </div>:
        null
      }
      {
        canNext?
        <div className={classes.right}>
          <MIconButton onClick={() => actions.next && actions.next()}>
            <MArrowRight />
          </MIconButton>
        </div>:
        null
      }
    </React.Fragment>
  )
}