import React from 'react'
import cx from 'classnames'
import noodle from '../../../index.js'

function Button ({ prev, next, ...props }) {
  return (
    <button {...props} className={cx('abs top bottom ma', {
      'prev': prev,
      'next': next
    })}>
      <svg className='abs fill ma' viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentcolor" strokeWidth="3">
        <path d="M5 1.0606601717798212 L11.939339828220179 8 L5 14.939339828220179" />
      </svg>
    </button>
  )
}

export default class Slider extends React.Component {
  constructor (props) {
    super(props)

    this.ref = React.createRef()
  }

  componentDidMount () {
    this.slider = noodle(this.ref.current)
  }

  componentWillUnmount () {
    this.slider && this.slider.destroy()
  }

  render () {
    const { children, className } = this.props

    return (
      <div className='x rel' style={{ overflow: 'hidden' }}>
        <div ref={this.ref} className={cx('slider rel', className)}>
          {children}
        </div>

        <Button prev onClick={e => this.slider.prev()} />
        <Button next onClick={e => this.slider.next()} />
      </div>
    )
  }
}
