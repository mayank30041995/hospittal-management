import { actionTypes } from '../actions/dashboardAction'
// import { HYDRATE } from 'next-redux-wrapper'

export const initialState = {
  loading: false,
  error: false,
  lastUpdate: 0,
  light: false,
  bookingOrder: [],
  medicalReport: [],
  prescriptions: [],
  comments: [],
  patientList: [],
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    // case HYDRATE: {
    //   return { ...state, ...action.payload }
    // }

    case actionTypes.LOAD_APP:
      return {
        ...state,
        medicalReport: [],
        ...initialState,
      }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.LOAD_BOOKING_ORDER:
    case actionTypes.LOAD_MEDICAL_REPORT:
    case actionTypes.LOAD_PRESCRIPTION:
    case actionTypes.LOAD_COMMENTS:
    case actionTypes.LOAD_PROFILE_PATIENT_LIST:
      return {
        ...state,
        loading: true,
      }

    case actionTypes.LOAD_BOOKING_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...{ bookingOrder: action.data },
      }
    case actionTypes.LOAD_PROFILE_PATIENT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        ...{ patientList: action.data },
      }

    case actionTypes.MEDICAL_REPORT_SUCCESS:
      return {
        ...state,
        loading: false,
        ...{ medicalReport: action.data },
      }

    case actionTypes.PRESCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        ...{ prescriptions: action.data },
      }

    case actionTypes.LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...{ comments: action.data },
      }

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      }

    default:
      return state
  }
}

export default appReducer
