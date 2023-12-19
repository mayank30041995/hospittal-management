import {
  all,
  call,
  delay,
  put,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'

import {
  authActionTypes,
  loginSuccess,
  loginRequest,
  logOutSuccess,
  loginUserFailed,
  registerFailed,
  geoLocationSuccess,
} from '../actions/authAction'
import appConfig from '../../utils/appConfig'
import { getUserProfile } from '../../utils/apiCalls'
import { fetchJSON } from '../../utils/apiCalls'
import { message } from 'antd'
import Router from 'next/router'
// Login Saga

function* geoLocation() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const fetchURL = appConfig.geoLocationUrl

  try {
    const response = yield call(fetchJSON, fetchURL, options)

    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      //   const data = yield res.json()
      yield put(geoLocationSuccess(response))
    }
  } catch (err) {
    yield put(failure(true))
  }
}
function* loginSaga({ payload: { username, password, type } }) {
  if (username === undefined || password === undefined) {
    let message = 'Invalid credentials'
    yield put(loginUserFailed(message))
    return
  }

  try {
    const options = {
      body: JSON.stringify({
        identifier: username,
        password: password,
        type: type,
      }),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      ttl: 0,
    }

    const response = yield call(fetchJSON, appConfig.loginUrl, options)

    if (response.status === 200) {
      if (response.data.user.type !== type) {
        message.error(`couldn't login with role ${type}`)
      } else {
        // console.log('LOGIN SAGA SUCCESS LOGIN ++++++++')
        localStorage.setItem('token', response.data.jwt)
        localStorage.setItem('userInfo', JSON.stringify(response.data.user))
        yield put(loginSuccess(response.data))
      }
    }
  } catch (err) {
    if (err.status !== 200) {
      let msg = err.data?.message[0]?.messages[0].message || err.data.error
      message.error(msg)

      yield put(loginUserFailed(msg))
      return
    }
    console.log(err)
  }
}

// signup Saga
function* signupSaga({ payload: { fullname, phone, email, password, type } }) {
  if (email === undefined || password === undefined) {
    let message = 'Invalid credentials'
    yield put(loginUserFailed(message))
    return
  }
  try {
    const options = {
      body: JSON.stringify({
        username: fullname,
        phone: phone,
        type: type,
        name: fullname,
        email: email,
        password: password,
      }),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }

    console.log('signupPartnerSaga', options)

    const response = yield call(fetchJSON, appConfig.register, options)

    if (response.status === 200) {
      localStorage.setItem('token', response?.data?.jwt)
      localStorage.setItem('userInfo', JSON.stringify(response?.data?.user))
      yield put(loginSuccess(response.data))
      // Router.push('/')
    }
  } catch (err) {
    if (err.status !== 200) {
      let msg = err?.data?.message[0].messages[0]?.message || err?.data?.error
      message.error(msg)
      yield put(loginUserFailed(msg))
      return
    }

    console.log(err)
  }
}

function* logOutSaga() {
  try {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('token')
    localStorage.removeItem('path')
    yield put(logOutSuccess())
  } catch (err) {
    console.log(err)
  }
}

function* authSaga() {
  yield all([
    takeLatest(authActionTypes.LOAD_GEOLOCATION, geoLocation),
    takeLatest(authActionTypes.LOGIN_REQUEST, loginSaga),
    takeLatest(authActionTypes.SIGNUP_REQUEST, signupSaga),
    takeLatest(authActionTypes.SIGNUP_REQUEST_PARTNER, signupSaga),
    takeLatest(authActionTypes.LOGOUT, logOutSaga),
  ])
}

export default authSaga
