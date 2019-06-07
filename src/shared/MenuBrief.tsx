import React, { useEffect, useCallback } from 'react'
import { changeImgUrl } from '@utils/imgUrl'
import { MenuStyle } from '@styles/shared/menu'

interface Props {
  specialid: number
  specialname: string
  imgurl: string
}

function ShMenuBrief(props: Props) {
  const classes = MenuStyle({})
  return (
    <figure className={classes.root}>
      <img
        className={classes.bg}
        src={changeImgUrl(props.imgurl)} 
        srcSet={`${changeImgUrl(props.imgurl, 240)} 240w,
                 ${changeImgUrl(props.imgurl, 480)} 480w`}
        sizes={`(max-width: 900px) 150px,
                (max-width: 2000px) 300px,`} />
        <figcaption className={classes.text}>{props.specialname}</figcaption>
    </figure>
  )
}

export default ShMenuBrief