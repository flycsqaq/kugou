import React from 'react'

interface Props {
  hash: string
  filename: string
  cover?: string
}

export default (props: Props) => {
  if (props.cover) {
    return (
      <div>none</div>
    )
  } else {
    return (
      <div>
        {props.filename}
      </div>
    )
  }
}