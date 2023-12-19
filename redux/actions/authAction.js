export const authActionTypes = {
  LOAD_GEOLOCATION: 'LOAD_GEOLOCATION',
  GEOLOCATION_SUCCESS: 'GEOLOCATION_SUCCESS',

  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',

  LOGIN_FAILED: 'LOGIN_FAILED',

  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',

  SIGNUP_REQUEST_PARTNER: 'SIGNUP_REQUEST_PARTNER',
  SIGNUP_SUCCESS_PARTNER: 'SIGNUP_SUCCESS_PARTNER',

  UPDATE_USERS_PROFILE_SUCCESS: 'UPDATE_USERS_PROFILE_SUCCESS',

  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
}

export function loadGeoLocation() {
  return { type: authActionTypes.LOAD_GEOLOCATION }
}
export function geoLocationSuccess(data) {
  return { type: authActionTypes.GEOLOCATION_SUCCESS, data }
}

export function login(username, password, type) {
  return {
    type: authActionTypes.LOGIN_REQUEST,
    payload: {
      username,
      password,
      type,
    },
  }
}
export function signup(fullname, phone, email, password, type) {
  return {
    type: authActionTypes.SIGNUP_REQUEST,
    payload: {
      fullname,
      phone,
      email,
      password,
      type,
    },
  }
}
export function signupPartner(fullname, phone, email, password, type) {
  return {
    type: authActionTypes.SIGNUP_REQUEST_PARTNER,
    payload: {
      fullname,
      phone,
      email,
      password,
      type,
    },
  }
}

export function signupRequest() {
  console.log('action loginReq ')
  return { type: authActionTypes.SIGNUP_REQUEST, payload: {} }
}

export function signupSuccess(response) {
  console.log('login-success', response)
  return {
    type: authActionTypes.SIGNUP_SUCCESS,
    payload: response,
  }
}

export function loginRequest() {
  console.log('action loginReq ')
  return { type: authActionTypes.LOGIN_REQUEST, payload: {} }
}

export function loginSuccess(response) {
  console.log('login-success', response)
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    payload: response,
  }
}

export function loginUserFailed(response) {
  console.log('action login failed ', response)
  return { type: authActionTypes.LOGIN_FAILED, payload: response }
}

export function logOut() {
  return { type: authActionTypes.LOGOUT }
}

export function logOutSuccess() {
  return { type: authActionTypes.LOGOUT_SUCCESS }
}
export function updateUsersProfileSuccess(payload) {
  return { type: authActionTypes.UPDATE_USERS_PROFILE_SUCCESS, payload }
}
