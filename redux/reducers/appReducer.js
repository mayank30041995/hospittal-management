import { actionTypes } from '../actions/appAction'
// import { HYDRATE } from 'next-redux-wrapper'

export const initialState = {
  defaultSearchOptions: {},
  loading: true,
  profileData: {},
  drawer: false,
  filters: {
    onVideo: false,
    onPhone: false,
    fee: 0,
    experience: 0,
  },
  filterType: '',
  role: 1,
  step: 1,
  formOne: {},
  formTwo: {},
  formThree: {},
  counter: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
}

function appReducer(state = initialState, action) {
  // console.log('action.payloadaction.payload', action.payload)
  switch (action.type) {
    // case HYDRATE: {
    //   return { ...state, ...action.payload }
    // }

    case actionTypes.UPLOAD_PROFILE_PHOTO:
      return {
        ...state,
        profileData: action.payload,
      }

    case actionTypes.APP_LOADING:
    case actionTypes.LOAD_SEARCH_OPTIONS:
      return {
        ...state,
        loading: action.payload || false,
      }

    case actionTypes.LOAD_SEARCH_OPTIONS_SUCCESS:
      return {
        ...state,
        defaultSearchOptions: action.payload,
      }

    case actionTypes.DRAWER:
      return {
        ...state,
        drawer: action.payload.drawer,
        filterType: action.payload.filterType,
      }
    case actionTypes.FILTER_ACTIONS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      }

    case actionTypes.ROLE:
      return {
        ...state,
        role: action.payload,
      }

    case actionTypes.STEP:
      return {
        ...state,
        step: action.payload,
      }

    case actionTypes.FORM_ONE:
      return {
        ...state,
        formOne: action.payload,
      }
    case actionTypes.FORM_TWO:
      return {
        ...state,
        formTwo: action.payload,
      }
    case actionTypes.FORM_THREE:
      return {
        ...state,
        formThree: action.payload,
      }

    case actionTypes.LOAD_APP:
      return {
        ...state,
        ...initialState,
      }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ counter: state.counter + 1 },
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ counter: state.counter - 1 },
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
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
