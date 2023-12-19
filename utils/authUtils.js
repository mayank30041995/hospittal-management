import jwtDecode from 'jwt-decode'

/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = () => {
  let user = getLoggedInUser()
  console.log(user, 'check')
  if (user.isLoggedIn === 'false' || !user) {
    return false
  }
  console.log(user.jwt, '++++++++++')
  const decoded = jwtDecode(user.jwt)

  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    console.warn('access token expired')
    return false
  } else {
    return true
  }
}

/**
 * Returns the logged in user
 * admin user orgAdmin || schoolAdmin teacher student
 */
const getLoggedInUser = () => {
  const user = window.localStorage.getItem('lifewise-auth')
  const userObj = user
    ? typeof user == 'object'
      ? user
      : JSON.parse(user)
    : null
  console.log('User Object is : ', userObj)

  return userObj
}

export { getLoggedInUser, isUserAuthenticated }
