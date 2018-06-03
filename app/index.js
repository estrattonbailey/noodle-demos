import React from 'react'
import { render } from 'react-dom'
import Slider from './components/Slider.js'
import Slide from './components/Slide.js'
import images from './images.js'

/**
 * Enable hot reloading for all subsequent modules
 */
if (module.hot && process && process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}

function Slideshow ({ className }) {
  return (
    <Slider className={className}>
      <Slide image={images[0]} />
      <Slide image={images[1]} />
      <Slide image={images[2]} />
      <Slide image={images[3]} />
      <Slide image={images[4]} />
      <Slide image={images[5]} />
    </Slider>
  )
}

function App () {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Slideshow />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', e => {
  render(<App />, document.body)
})
