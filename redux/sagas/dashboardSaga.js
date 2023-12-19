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
  commentsSuccess,
  loadBookingOrder,
  loadBookingOrderSuccess,
  loadMedicalReport,
  loadProfilePatientListSuccess,
  medicalReportSuccess,
  prescriptionSuccess,
  updateUsersProfile,
} from '../actions/dashboardAction'
import { fetchJSON, fetchSearchJSON2 } from '../../utils/apiCalls'
import appConfig from '@/utils/appConfig'
import { actionTypes } from '../actions/dashboardAction'
import { message } from 'antd'
import { failure, step } from '../actions/appAction'
import { updateUsersProfileSuccess } from '../actions/authAction'

function* loadBookingSaga({ id }) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  const fetchURL = appConfig.searchBookingOrderUrl + '?' + `user=${id}`
  try {
    const response = yield call(fetchJSON, fetchURL, options)

    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      //   const data = yield res.json()
      yield put(loadBookingOrderSuccess(response))
    }
  } catch (err) {
    yield put(failure(true))
  }
}
function* loadPatientListSaga({ id, sortBy }) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    ttl: 0,
  }
  let fetchURL = ''
  console.log('sortByRRRRRRR', sortBy)
  if (sortBy) {
    fetchURL = `${appConfig.searchProfilesUrl}?partner=${id}&_sort=${sortBy}:asc`
  } else {
    fetchURL = `${appConfig.searchProfilesUrl}?partner=${id}`
  }

  try {
    const response = yield call(fetchSearchJSON2, fetchURL, options)

    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      //   const data = yield res.json()
      yield put(loadProfilePatientListSuccess(response))
    }
  } catch (err) {
    yield put(failure(true))
  }
}

function* loadMedicalReportSaga({ id, force }) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    ...force,
  }
  const fetchURL = appConfig.searchMedicalReportUrl + '?' + `user=${id}`
  try {
    const response = yield call(fetchJSON, fetchURL, options)

    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      yield put(medicalReportSuccess(response))
    }
  } catch (err) {
    yield put(failure(true))
  }
}

function* loadPrescriptionSaga({ id }) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  const fetchURL = appConfig.searchPresrcriptionUrl + '?' + `user=${id}`
  try {
    const response = yield call(fetchJSON, fetchURL, options)
    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      yield put(prescriptionSuccess(response))
    }
  } catch (err) {
    yield put(failure(true))
  }
}

function* loadCommentsSaga() {
  const options = {}
  const fetchURL = appConfig.commentsUrl
  try {
    const response = yield call(fetchJSON, fetchURL, options)

    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      yield put(commentsSuccess(response))
    }
  } catch (err) {
    yield put(failure(true))
  }
}

function* postMedicalReportSaga({ report }) {
  const options = {
    body: JSON.stringify(report),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  const fetchURL = appConfig.searchMedicalReportUrl
  try {
    const response = yield call(fetchJSON, fetchURL, options)

    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      yield put(loadMedicalReport(report.user, { force: true }))
    }
  } catch (err) {
    yield put(failure(true))
  }
}
function* deleteMedicalReportSaga({ id }) {
  // console.log('deleteMedicalReportSaga', id)
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  const fetchURL = appConfig.searchMedicalReportUrl + '/' + `${id}`
  try {
    const response = yield call(fetchJSON, fetchURL, options)

    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      yield put(loadMedicalReport(report.user))
    }
  } catch (err) {
    yield put(failure(true))
  }
}

function* loadBookingSagabyStatus({ id, status, sortBy }) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  let fetchURL = ''

  if (sortBy) {
    fetchURL =
      appConfig.searchBookingOrderUrl +
      '?' +
      `user=${id}&Status=${status}&_sort=${sortBy}:asc`
  } else {
    fetchURL =
      appConfig.searchBookingOrderUrl + '?' + `user=${id}&Status=${status}`
  }

  try {
    const response = yield call(fetchJSON, fetchURL, options)

    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      //   const data = yield res.json()
      yield put(loadBookingOrderSuccess(response))
    }
  } catch (err) {
    yield put(failure(true))
  }
}

function* saveBookingOrderSaga({ payload }) {
  const options = {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  const fetchURL = appConfig.searchBookingOrderUrl
  try {
    const response = yield call(fetchJSON, fetchURL, options)

    if (!response.status === 200) {
      yield put(failure(true))
    } else {
      message.info('Booking Order Saved Successfully') // have to remove letter
      yield put(step(5))
      yield put(saveBookingOrderSuccess(response))
    }
  } catch (err) {
    yield put(failure(true))
  }
}

function* deleteBookingOrderSaga({ id }) {
  console.log('deleteBookingOrderSaga', id)
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  const fetchURL = appConfig.searchBookingOrderUrl + '/' + `${id}`
  try {
    const response = yield call(fetchJSON, fetchURL, options)
    if (response.status === 403) {
      message.error('Unable to cancel the order')
      yield put(failure(true))
    } else if (response.status === 400) {
      yield put(failure(true))
      message.error('Unable to cancel the order')
    } else {
      message.info('Appointment Canceled Successfully')
    }
  } catch (err) {
    yield put(failure(true))
  }
}

function* updateProfile({ id, payload }) {
  const options = {
    body: JSON.stringify(payload),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }
  const fetchURL = appConfig.users + '/' + `${id}`
  try {
    const response = yield call(fetchJSON, fetchURL, options)
    if (response.status === 403) {
      message.error('Unable to update the profile')
      yield put(failure(true))
    } else if (response.status === 400) {
      yield put(failure(true))
      message.error('Unable to update the profile')
    } else {
      localStorage.setItem('userInfo', JSON.stringify(response))
      yield put(updateUsersProfileSuccess(response))
      message.info('Profile Updated Successfully')
    }
  } catch (err) {
    yield put(failure(true))
  }
}

function* dashboardSaga() {
  yield all([
    takeLatest(actionTypes.DELETE_MEDICAL_REPORT, deleteMedicalReportSaga),
    takeLatest(actionTypes.LOAD_BOOKING_ORDER, loadBookingSaga),
    takeLatest(actionTypes.LOAD_MEDICAL_REPORT, loadMedicalReportSaga),
    takeLatest(
      actionTypes.LOAD_BOOKING_ORDER_BY_STATUS,
      loadBookingSagabyStatus
    ),
    takeLatest(actionTypes.POST_MEDICAL_REPORT, postMedicalReportSaga),

    takeLatest(actionTypes.LOAD_COMMENTS, loadCommentsSaga),

    takeLatest(actionTypes.LOAD_PRESCRIPTION, loadPrescriptionSaga),

    takeLatest(actionTypes.SAVE_BOOKING_ORDER, saveBookingOrderSaga),
    takeLatest(actionTypes.DELETE_BOOKING_ORDER, deleteBookingOrderSaga),
    takeLatest(actionTypes.UPDATE_USERS_PROFILE, updateProfile),
    takeLatest(actionTypes.LOAD_PROFILE_PATIENT_LIST, loadPatientListSaga),
  ])
}

export default dashboardSaga
