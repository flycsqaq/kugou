import React from 'react'
import { changeImgUrl } from '@utils/imgUrl'
import { MenuStyle } from '@styles/shared/menu'
import { Link } from 'react-router-dom'
interface Props {
  singerid: number
  singername: string
  imgurl: string
}

function ShRankBrief(props: Props) {
  const classes = MenuStyle({})
  return (
    <Link to={`/singer/${props.singerid}`}>
      <figure className={classes.root}>
        <img
          src={changeImgUrl(props.imgurl)} 
          srcSet={`${changeImgUrl(props.imgurl, 480)} 480w`}
          sizes={`(max-width: 9999px) 300px,`} />
          <figcaption className={classes.title}>{props.singername}</figcaption>
      </figure>
    </Link>
  )
}

export default ShRankBrief