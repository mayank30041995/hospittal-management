import { actionSearchTypes } from '../actions/searchAction'
// import { HYDRATE } from 'next-redux-wrapper'

export const initialState = {
  count: '',
  error: false,
  loading: true,
  lastUpdate: 0,
  light: false,
  pagination: { page: 1, start: 0, limit: 10 },
  doctors: [],
  searchResult: [],
  searchDoctorResult: [],
  hospitalDoctors: [],
}

function appReducer(state = initialState, action) {
  console.log('appReducer', action.data)
  switch (action.type) {
    case actionSearchTypes.LOADING:
      return {
        ...state,
        ...{ loading: action.payload },
      }
    case actionSearchTypes.REFRESH:
      return {
        ...state,
        ...{
          count: '',
          error: false,
          loading: true,
          lastUpdate: 0,
          light: false,
          pagination: { page: 1, start: 0, limit: 10 },
          doctors: [],
          searchResult: [],
          searchDoctorResult: [],
          hospitalDoctors: [],
        },
      }

    case actionSearchTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error, loading: false, searchResult: [] },
      }
    case actionSearchTypes.PAGE_NEXT:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: state.pagination.page + 1,
          start: action.payload + 1 * 10,
        },
      }
    case actionSearchTypes.PAGE_PREVIOUS:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: state.pagination.page - 1,
          start: action.payload - 10,
        },
      }

    case actionSearchTypes.LOAD_SEARCH_HOSPITAL:
      return {
        ...state,
        loading: true,
        error: false,
        count: '',
      }
    case actionSearchTypes.LOAD_SEARCH_DOCTOR:
      return {
        ...state,
        loading: true,
        error: false,
        count: '',
      }
    case actionSearchTypes.LOAD_DOCTOR:
      return {
        ...state,
        loading: true,
        error: false,
        count: '',
      }

    case actionSearchTypes.LOAD_HOSPITAL_DOCTORS:
      return {
        ...state,
        loading: true,
        error: false,
        count: '',
      }

    case actionSearchTypes.LOAD_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          error: false,
          searchResult: [...state.searchResult, ...action.data].reduce(
            (res, data, index, arr) => {
              if (res.findIndex((e) => e._id === data._id) < 0) {
                res.push(data)
              }
              return res
            },
            []
          ),
        },
      }
    case actionSearchTypes.LOAD_SEARCH_DOCTOR_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          error: false,
          searchDoctorResult: [
            ...state.searchDoctorResult,
            ...action.data,
          ].reduce((res, data, index, arr) => {
            if (res.findIndex((e) => e._id === data._id) < 0) {
              res.push(data)
            }
            return res
          }, []),
        },
      }

    case actionSearchTypes.LOAD_HOSPITAL_DOCTORS_SUCCESS:
      return {
        ...state,
        ...{
          loading: false,
          error: false,
          hospitalDoctors: [...action.data],
        },
      }

    case actionSearchTypes.LOAD_DOCTOR_SUCCESS:
      return {
        ...state,
        ...{ loading: false, error: false, doctors: action.data },
      }

    case actionSearchTypes.LOAD_SEARCH_COUNT:
      return {
        ...state,
        ...{ loading: false, count: action.data },
      }

    default:
      return state
  }
}

export default appReducer
