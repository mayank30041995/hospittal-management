import React from 'react'
import Homepage from './Homepage'

function Hospital({ user, ...props }) {
  return <Homepage user={user} {...props} />
}

export default Hospital
