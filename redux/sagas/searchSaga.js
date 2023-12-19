import {
  all,
  call,
  delay,
  put,
  take,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import {
  actionTypes,
  failure,
  loadDataSuccess,
  loadDefaultOptionsSuccess,
  tickClock,
} from '../actions/appAction'
import { message } from 'antd'
import appConfig from '../../utils/appConfig'
import { fetchSearchJSON, sendWelcome } from '../../utils/apiCalls'
import { fetchJSON } from '../../utils/apiCalls'
import _ from 'lodash-contrib'
import { getUserProfile } from '../../utils/apiCalls'
import {
  actionSearchTypes,
  loadDoctorSuccess,
  loadHospitalDoctorsSuccess,
  loadSearchDataSuccess,
  loadSearchDoctorSuccess,
  refreshApp,
  searchFailure,
  setSearchCount,
} from '../actions/searchAction'

const stateSearch = (state) => state.search

function checkIfDuplicateExists(arr) {
  let _ids = arr.map((value) => value._id)
  return new Set(_ids).size !== _ids.length
}

// app Saga

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(60000)
  }
}
// For testing only
function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* loadDefaultSearchSaga() {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  try {
    const [hospitals, doctors, speciality, condition, treatment] = yield all([
      call(
        fetchSearchJSON,
        appConfig.searchDefaultUrl + '?q=a&cat=hospital&limit=15',
        options
      ),
      call(
        fetchSearchJSON,
        appConfig.searchDefaultUrl + '?q=a&cat=doctor&limit=15',
        options
      ),
      call(
        fetchSearchJSON,
        appConfig.searchDefaultUrl + '?q=a&cat=speciality&limit=15',
        options
      ),
      call(
        fetchSearchJSON,
        appConfig.searchDefaultUrl + '?q=a&cat=condition&limit=15',
        options
      ),
      call(
        fetchSearchJSON,
        appConfig.searchDefaultUrl + '?q=a&cat=treatment&limit=15',
        options
      ),
    ])

    let payload = {
      hospitals: hospitals,
      doctors: doctors,
      speciality: speciality,
      condition: condition,
      treatment: treatment,
    }
    yield put(loadDefaultOptionsSuccess(payload))
  } catch (err) {
    yield put(failure(err))
  }
}

//  search Saga

const getMoreFilters = (filters, queryString, type) => {
  // console.log('loadSearchDoctorSaga', filters, queryString, type)
  if (filters.length) {
    if (filters[0]?.key !== '' && filters[0]?.key !== undefined) {
      if (type === 'doctor') {
        let query_filters = `&hospital=${filters[0].key}`
        queryString = queryString.concat(query_filters)
      } else {
        let query_filters = `&_id=${filters[0].key}`
        queryString = queryString.concat(query_filters)
      }
    }
    if (filters[1]?.key !== '' && filters[1]?.key !== undefined) {
      let query_filters = `&City_contains=${filters[1].key}`
      queryString = queryString.concat(query_filters)
    }
    if (filters[2]?.key !== '' && filters[2]?.key !== undefined) {
      let query_filters = `&_sort=${filters[2].name}:${filters[2].key}`
      queryString = queryString.concat(query_filters)
    }
    if (type === 'doctor') {
      if (filters[3]?.key !== '' && filters[3]?.key !== undefined) {
        let query_filters = `&${filters[3].name}=${filters[3].value}`
        queryString = queryString.concat(query_filters)
      }
    }
    if (filters[4]?.key !== '' && filters[4]?.key !== undefined) {
      let query_filters = `&${filters[4].name}=${310}`
      queryString = queryString.concat(query_filters)
    }
    if (filters[5]?.key !== '' && filters[5]?.key !== undefined) {
      if (type === 'doctor' && filters[5].key.length > 0) {
        let query_filters = `&${filters[5].name}_gte=${filters[5].key[0]}&${filters[5].name}_lte=${filters[5].key[1]}`
        queryString = queryString.concat(query_filters)
      }
    }
    if (filters[6]?.key !== '' && filters[6]?.key !== undefined) {
      if (type === 'doctor' && filters[6].key.length > 0) {
        let query_filters = `&${filters[6].name}_gte=${filters[6].key[0]}&${filters[6].name}_lte=${filters[6].key[1]}`
        queryString = queryString.concat(query_filters)
      }
    }
    if (filters[7]?.key !== '' && filters[7]?.key !== undefined) {
      if (type === 'doctor') {
        let query_filters = `&${filters[7].title}=${filters[7].value}`
        if (!filters[7].value) {
          query_filters = ''
        }
        queryString = queryString.concat(query_filters)
      }
    }
    if (filters[8]?.key !== '' && filters[8]?.key !== undefined) {
      if (type === 'doctor') {
        let query_filters = `&${filters[8].title}=${filters[8].value}`
        if (!filters[8].value) {
          query_filters = ''
        }
        queryString = queryString.concat(query_filters)
      }
    }
  }
  return queryString
}

function* loadSearchHospitalSaga({ typeFetch, query, page = 0, filters = [] }) {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  const items = yield select(stateSearch)
  let { pagination, searchResult } = items

  try {
    const uniqueQuery = query.filter(
      (obj, index) => query.findIndex((item) => item.key === obj.key) === index
    )
    const specialitiesIds = uniqueQuery.map((id) => `${typeFetch}=${id.key}`)
    let queryString = specialitiesIds.join('&')
    queryString = getMoreFilters(filters, queryString, 'hospital')

    if (queryString.length) {
      if (pagination.start === 0) {
        yield put(refreshApp())
      }
      if (checkIfDuplicateExists(searchResult)) {
        yield put(refreshApp())
      }

      const response = yield call(
        fetchSearchJSON,
        appConfig.searchHospitalUrl +
          '?' +
          queryString +
          `&_start=${pagination.start}&_limit=${pagination.limit}`,
        options
      )
      const responseCount = yield call(
        fetchSearchJSON,
        appConfig.searchHospitalUrl + '/count?' + queryString,
        options
      )

      yield put(loadSearchDataSuccess(response))
      yield put(setSearchCount(responseCount))
      // throw Error('Enter your error message here')
    } else {
      if (pagination.start === 0) {
        yield put(refreshApp())
      }
      const response = yield call(
        fetchSearchJSON,
        appConfig.searchHospitalUrl +
          '?' +
          `_start=${pagination.start}&_limit=${pagination.limit}`,
        options
      )
      const responseCount = yield call(
        fetchSearchJSON,
        appConfig.searchHospitalUrl + '/count',
        options
      )

      yield put(loadSearchDataSuccess(response))
      yield put(setSearchCount(responseCount))
    }
  } catch (err) {
    yield put(searchFailure('Failed To Load Hospitals Data'))
  }
}

function* loadSearchDoctorSaga({ typeFetch, query, page = 0, filters = [] }) {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  const items = yield select(stateSearch)
  let { pagination, searchResult } = items
  try {
    const uniqueQuery = query.filter(
      (obj, index) => query.findIndex((item) => item.key === obj.key) === index
    )
    const specialitiesIds = uniqueQuery.map((id) => `${typeFetch}=${id.key}`)
    let queryString = specialitiesIds.join('&')
    queryString = getMoreFilters(filters, queryString, 'doctor')
    if (queryString.length) {
      if (pagination.start === 0) {
        yield put(refreshApp())
      }
      // If Duplicates Found on list then reload
      if (checkIfDuplicateExists(searchResult)) {
        yield put(refreshApp())
      }
      // Api Call
      const response = yield call(
        fetchSearchJSON,
        appConfig.searchDoctorUrl +
          '?' +
          queryString +
          `&_start=${pagination.start}&_limit=${pagination.limit}`,
        options
      )
      const responseCount = yield call(
        fetchSearchJSON,
        appConfig.searchDoctorUrl + '/count?' + queryString,
        options
      )
      // console.log('LOGIN SAGA fetchSearchJSON Response is ', response, query)
      yield put(loadSearchDoctorSuccess(response))
      yield put(setSearchCount(responseCount))
      // throw Error('Enter your error message here')
    } else {
      const response = yield call(
        fetchSearchJSON,
        appConfig.searchDoctorUrl +
          '?' +
          `_start=${page}&_limit=${pagination.limit}`,
        options
      )
      const responseCount = yield call(
        fetchSearchJSON,
        appConfig.searchDoctorUrl + '/count',
        options
      )
      // console.log('LOGIN SAGA fetchSearchJSON Response is ', response, query)
      yield put(loadSearchDoctorSuccess(response))
      yield put(setSearchCount(responseCount))
    }
  } catch (err) {
    yield put(searchFailure('Failed To Load Hospitals Data'))
  }
}

function* loadDoctorSaga({ query }) {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  const uniqueQuery = query.filter(
    (obj, index) => query.findIndex((item) => item.key === obj.key) === index
  )
  try {
    if (uniqueQuery[0]?.key) {
      const doctorsIds = uniqueQuery.map((id) => `id=${id.key}`)
      const queryString = doctorsIds.join('&')
      if (queryString.length) {
        const response = yield call(
          fetchSearchJSON,
          appConfig.searchDoctorUrl + '?' + queryString,
          options
        )
        const responseCount = yield call(
          fetchSearchJSON,
          appConfig.searchDoctorUrl + '/count',
          options
        )

        yield put(loadDoctorSuccess(response))
        yield put(setSearchCount(responseCount))
        // throw Error('Enter your error message here')
      }
    } else {
      const response = yield call(
        fetchSearchJSON,
        appConfig.searchDoctorUrl,
        options
      )
      const responseCount = yield call(
        fetchSearchJSON,
        appConfig.searchDoctorUrl + '/count',
        options
      )

      yield put(loadDoctorSuccess(response))
      yield put(setSearchCount(responseCount))
    }
  } catch (err) {
    yield put(searchFailure('Failed To Load Hospitals Data'))
  }
}

function* commentDoctorSaga({ payload }) {
  // console.log('commentDoctorSaga', payload)
  const options = {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const fetchURL = appConfig.commentsUrl
  try {
    const response = yield call(fetchJSON, fetchURL, options)
    if (response.status === 500) {
      message.error('Unable to submit the review')
      yield put(failure(true))
    } else if (response.status === 400) {
      yield put(failure(true))
      message.error('Unable to submit the review')
    } else {
      message.info('Review Submitted Successfully')
    }
  } catch (err) {
    message.error('Unable to submit the review')
    yield put(failure(true))
  }
}

function* commentHospitalSaga({ payload }) {
  console.log('commentHospitalSaga', payload)
  const options = {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const fetchURL = appConfig.commentsUrl
  try {
    const response = yield call(fetchJSON, fetchURL, options)

    if (response.status === 500) {
      message.error('Unable to submit the review')
      yield put(failure(true))
    } else if (response.status === 400) {
      yield put(failure(true))
      message.error('Unable to submit the review')
    } else {
      message.info('Review Submitted Successfully')
    }
  } catch (err) {
    message.error('Unable to submit the review')
    yield put(failure(true))
  }
}

function* loadHospitalDoctorsSaga({ id, payload, filters = [], limit = -1 }) {
  // console.log('loadHospitalDoctorsSaga', limit)
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  const experiences =
    filters.experience?.length > 0
      ? filters.experience?.map((value) => `Experience_lte=${value}`)
      : []
  const ratings =
    filters.rating?.length > 0
      ? filters.rating?.map((value) => `googleRating_gte=${value}`)
      : []

  let allFilters = [...experiences, ...ratings].join('&')
  // console.log('loadHospitalDoctorsSaga', id, payload)
  if (id && id !== '') {
    var queryString = _.toQuery({
      hospital: id,
      _start: 0,
      _limit: limit,
      ...(payload.condition === 'speciality' && payload.id
        ? { specialities: payload.id }
        : payload.condition === 'condition' && payload.id
        ? { conditions: payload.id }
        : payload.condition === 'treatment' && payload.id
        ? { treatments: payload.id }
        : payload.condition === 'doctor' && payload.id
        ? { id: payload.id }
        : {}),
    })
    try {
      // console.log('loadHospitalDoctorsSaga', id, payload, filters, queryString)
      const response = yield call(
        fetchSearchJSON,
        appConfig.searchDoctorUrl + '?' + queryString + '&' + allFilters,
        options
      )
      // const responseCount = yield call(
      //   fetchSearchJSON,
      //   appConfig.searchDoctorUrl +
      //     '/count' +
      //     '?' +
      //     queryString +
      //     '&' +
      //     allFilters,
      //   options
      // )
      yield put(loadHospitalDoctorsSuccess(response))
      // yield put(setSearchCount(responseCount))
      // throw Error('Enter your error message here')
    } catch (err) {
      yield put(failure(true))
      console.log('error message', err)
    }
  }
}

function* searchSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_SEARCH_OPTIONS, loadDefaultSearchSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionSearchTypes.LOAD_SEARCH_HOSPITAL, loadSearchHospitalSaga),
    takeLatest(actionSearchTypes.LOAD_SEARCH_DOCTOR, loadSearchDoctorSaga),
    takeLatest(
      actionSearchTypes.LOAD_HOSPITAL_DOCTORS,
      loadHospitalDoctorsSaga
    ),
    takeLatest(actionSearchTypes.LOAD_DOCTOR, loadDoctorSaga),
    takeLatest(actionSearchTypes.DOCTOR_COMMENT, commentDoctorSaga),
    takeLatest(actionSearchTypes.HOSPITAL_COMMENT, commentHospitalSaga),
  ])
}

export default searchSaga
