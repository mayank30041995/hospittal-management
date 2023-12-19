import React from 'react'

import Patient from './Components/Patient'
import Doctor from './Components/Doctor'
import Hospital from './Components/Hospital'

function Dashboard({ user, ...props }) {
  const { type } = user
  return (
    <>
      {type === 'user' && <Patient user={user} {...props} />}
      {(type === 'doctor' || type === 'partner') && (
        <Doctor user={user} type={type} {...props} />
      )}
      {type === 'hospital' && <Hospital user={user} {...props} />}
    </>
  )
}

export default Dashboard
