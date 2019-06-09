import React from 'react'
import { MArrowDropDown, MIconButton } from '@components/material-ui'
import { PaginationStyle } from '@styles/pagination';
import { PaginationProps } from '@models/components';

export default (props: PaginationProps) => {
  const classes = PaginationStyle({})
  const {
    actions,
    isOpen,
  } = props
  return (
    <React.Fragment>
      {
        !isOpen?
        <div className={classes.footer}>
          <MIconButton onClick={() => actions.open && actions.open()}>
            <MArrowDropDown />
          </MIconButton>
        </div>:
        null
      }
    </React.Fragment>
  )
}