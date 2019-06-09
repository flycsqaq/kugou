import React from 'react'
import { MenuStyle } from '@styles/shared/menu'
import { Link } from 'react-router-dom' 
interface Props {
  classid: number
  classname: string
  imgurl: string
}

function ShClassBrief(props: Props) {
  const classes = MenuStyle({})
  return (
    <Link to={`/class/singer/${props.classid}`}>
      <figure className={classes.root}>
        <img
          src={props.imgurl}  />
        <figcaption className={classes.title}>{props.classname}</figcaption>
      </figure>
    </Link>
  )
}

export default ShClassBrief