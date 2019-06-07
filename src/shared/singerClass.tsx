import React, { useEffect, useCallback } from 'react'
import { changeImgUrl } from '@utils/imgUrl'
import { MenuStyle } from '@styles/shared/menu'

interface Props {
  classid: number
  classname: string
  imgurl: string
}

function ShClassBrief(props: Props) {
  const classes = MenuStyle({})
  return (
    <figure className={classes.root}>
      <img
        className={classes.bg}
        src={props.imgurl}  />
        <figcaption className={classes.text}>{props.classname}</figcaption>
    </figure>
  )
}

export default ShClassBrief