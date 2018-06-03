import React from 'react'
import cx from 'classnames'
import noodle from 'noodle'
import Button from './Button.js'

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
      <div className='page-container rel f aic jcc'>
        <div className={cx('slider-wrapper x rel', className)}>
          <div ref={this.ref} className='slider rel x'>{children}</div>

          <Button prev onClick={e => this.slider.prev()} />
          <Button next onClick={e => this.slider.next()} />
        </div>
      </div>
    )
  }
}
