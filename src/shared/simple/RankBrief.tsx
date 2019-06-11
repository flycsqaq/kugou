import React from 'react'
import { changeImgUrl } from '@utils/imgUrl'
import { MenuStyle } from '@styles/shared/menu'
import { Link } from 'react-router-dom'
interface Props {
  rankid: number
  rankname: string
  imgurl: string
  intro: string
}

function ShRankBrief(props: Props) {
  const classes = MenuStyle({})
  return (
    <Link to={`/rank/songs/${props.rankid}`}>
      <figure className={classes.root}>
      <img
          src={changeImgUrl(props.imgurl)} 
          srcSet={`${changeImgUrl(props.imgurl, 240)} 240w,
                   ${changeImgUrl(props.imgurl, 480)} 480w`}
          sizes={`(max-width: 400px) 220px,
                  (max-width: 9999px) 300px`} />
          <figcaption className={classes.title}>{props.rankname}</figcaption>
      </figure>
    </Link>
  )
}

export default ShRankBrief