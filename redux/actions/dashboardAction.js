export const actionTypes = {
  FAILURE: 'FAILURE',

  LOAD_APP: 'LOAD_APP',

  LOAD_MEDICAL_REPORT: 'LOAD_MEDICAL_REPORT',
  MEDICAL_REPORT_SUCCESS: 'MEDICAL_REPORT_SUCCESS',

  LOAD_COMMENTS: 'LOAD_COMMENTS',
  LOAD_COMMENTS_SUCCESS: 'LOAD_COMMENTS_SUCCESS',

  LOAD_BOOKING_ORDER: 'LOAD_BOOKING_ORDER',
  LOAD_PROFILE_PATIENT_LIST: 'LOAD_PROFILE_PATIENT_LIST',
  LOAD_BOOKING_ORDER_BY_STATUS: 'LOAD_BOOKING_ORDER_BY_STATUS',
  LOAD_BOOKING_ORDER_SUCCESS: 'LOAD_BOOKING_ORDER_SUCCESS',
  LOAD_PROFILE_PATIENT_LIST_SUCCESS: 'LOAD_PROFILE_PATIENT_LIST_SUCCESS',

  POST_MEDICAL_REPORT: 'POST_MEDICAL_REPORT',
  DELETE_MEDICAL_REPORT: 'DELETE_MEDICAL_REPORT',

  LOAD_PRESCRIPTION: 'LOAD_PRESCRIPTION',
  PRESCRIPTION_SUCCESS: 'PRESCRIPTION_SUCCESS',

  SAVE_BOOKING_ORDER: 'SAVE_BOOKING_ORDER',
  SAVE_BOOKING_ORDER_SUCCESS: 'SAVE_BOOKING_ORDER_SUCCESS',

  DELETE_BOOKING_ORDER: 'DELETE_BOOKING_ORDER',
  UPDATE_USERS_PROFILE: 'UPDATE_USERS_PROFILE',
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export function loadApp() {
  return { type: actionTypes.LOAD_APP }
}
export function loadMedicalReport(id, force) {
  return { type: actionTypes.LOAD_MEDICAL_REPORT, id, force }
}
export function medicalReportSuccess(data) {
  return { type: actionTypes.MEDICAL_REPORT_SUCCESS, data }
}

export function postMedicalReport(report) {
  return { type: actionTypes.POST_MEDICAL_REPORT, report }
}
export function deleteMedicalReport(id) {
  return { type: actionTypes.DELETE_MEDICAL_REPORT, id }
}

export function loadBookingOrder(id) {
  return { type: actionTypes.LOAD_BOOKING_ORDER, id }
}
export function loadProfilePatientList(id, sortBy) {
  return { type: actionTypes.LOAD_PROFILE_PATIENT_LIST, id, sortBy }
}

export function loadBookingOrderByStatus(id, status, sortBy) {
  return { type: actionTypes.LOAD_BOOKING_ORDER_BY_STATUS, id, status, sortBy }
}

export function loadBookingOrderSuccess(data) {
  return {
    type: actionTypes.LOAD_BOOKING_ORDER_SUCCESS,
    data,
  }
}
export function loadProfilePatientListSuccess(data) {
  return {
    type: actionTypes.LOAD_PROFILE_PATIENT_LIST_SUCCESS,
    data,
  }
}

export function loadPrescriptions(id) {
  return { type: actionTypes.LOAD_PRESCRIPTION, id }
}

export function prescriptionSuccess(data) {
  return { type: actionTypes.PRESCRIPTION_SUCCESS, data }
}

export function loadComments() {
  return { type: actionTypes.LOAD_COMMENTS }
}

export function commentsSuccess(data) {
  return { type: actionTypes.LOAD_COMMENTS_SUCCESS, data }
}

export function saveBookingOrder(payload) {
  return { type: actionTypes.SAVE_BOOKING_ORDER, payload }
}

export function saveBookingOrderSuccess(data) {
  return { type: actionTypes.SAVE_BOOKING_ORDER_SUCCESS, data }
}
export function cancelBookingOrder(id) {
  return { type: actionTypes.DELETE_BOOKING_ORDER, id }
}

export function updateUsersProfile(id, payload) {
  return { type: actionTypes.UPDATE_USERS_PROFILE, id, payload }
}