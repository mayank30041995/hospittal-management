import { authActionTypes } from '../actions/authAction'

import { persistReduce } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const initialState = {
  isLoggedIn: false,
  jwt: '',
  user: {},
  userProfile: {},
  loading: false,
  message: '',
  location: {},
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActionTypes.GEOLOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        ...{ location: action.data },
      }
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        ...{ isLoggedIn: false, jwt: '', user: {}, loading: true, message: '' },
      }

    case authActionTypes.LOGIN_SUCCESS:
      let userobj = {}

      if (action.payload.jwt) {
        userobj.jwt = action.payload.jwt
      }
      if (action.payload.user) {
        userobj.user = action.payload.user
      }
      if (action.payload.user_profile) {
        userobj.user_profile = action.payload.user_profile
      }

      return {
        ...state,
        ...{
          isLoggedIn: true,
          ...userobj,
          loading: false,
          message: '',
        },
      }
    case authActionTypes.USER_PROFILE_REQUEST:
      return {
        ...state,
        user: {},
        userProfile: {},
        loading: true,
      }
    case authActionTypes.USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case authActionTypes.UPDATE_USERS_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userProfile: action.payload,
        loading: false,
      }
    case authActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        ...{
          isLoggedIn: false,
          jwt: '',
          user: {},
          loading: false,
          message: '',
        },
      }
    default:
      return state
  }
}
export default authReducer
