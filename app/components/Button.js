import React from 'react'
import cx from 'classnames'

export default function Button ({ prev, next, ...props }) {
  return (
    <button {...props} className={cx('abs top bottom ma', {
      'prev': prev,
      'next': next
    })}>
      <svg className='abs fill ma' viewBox='0 0 16 16' width='16' height='16' fill='none' stroke='currentcolor' strokeWidth='3'>
        <path d='M5 1.0606601717798212 L11.939339828220179 8 L5 14.939339828220179' />
      </svg>
    </button>
  )
}
