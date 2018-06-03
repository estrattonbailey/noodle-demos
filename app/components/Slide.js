import React from 'react'

export default function Slide (props) {
  return (
    <div className='slide rel x'>
      <img className='abs fill x y'
        src={props.image} />
    </div>
  )
}
