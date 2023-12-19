import React, { useRef } from 'react'
import HomePage from './HomePage'

function Doctor({ user, ...props }) {
  return (
    <div>
      <HomePage user={user} {...props} />
    </div>
  )
}

export default Doctor
