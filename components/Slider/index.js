import React from 'react'
import { memo } from 'react'
import Slider from 'react-carousel-responsive'
import 'react-carousel-responsive/dist/styles.css'

function Sliders({ slidesToShow, autoplay, children, ...props }) {
  let { slidesToScroll, height } = props
  return (
    <Slider
      slidesToShow={slidesToShow}
      autoplay={autoplay}
      slidesToScroll={slidesToScroll}
      height={height}
      {...props}
    >
      {children}
    </Slider>
  )
}

export default memo(Sliders)
