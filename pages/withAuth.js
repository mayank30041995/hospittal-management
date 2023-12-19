import { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
const _ = require('lodash')
import Router from 'next/router'

const withAuth = (Component) => {
  const Auth = (props) => {
    const { jwt, user } = useSelector((state) => state.auth)
    // console.log('withAuth', user)
    useEffect(() => {
      const path =
        localStorage.getItem('path') || `/dashboard/${user.type}/${user._id}`
      if (!_.isEmpty(user)) {
        Router.push(path)
      }
    }, [user])

    return <Component {...props} />
  }

  return Auth
}

export default withAuth

//In other Way

// import { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '@context/auth'
// import Router from 'next/router'

// const Authorised = ({ children }) => {
//   const { user } = useContext(AuthContext)

//   useEffect(() => {
//     if (!user) Router.push('/login')
//   }, [user])

//   if (!user) {
//     return null
//   }

//   return children
// }

// const Sample = () => {
//   <Authorised>
//     <div>This is protected content</div>
//   </Authorised>
// }
