export const actionSearchTypes = {
  FAILURE: 'FAILURE',
  LOAD_SEARCH_HOSPITAL: 'LOAD_SEARCH_HOSPITAL',
  LOAD__SEARCH_DATA: 'LOAD__SEARCH_DATA',
  LOAD_SEARCH_DATA_SUCCESS: 'LOAD_SEARCH_DATA_SUCCESS',

  LOAD_SEARCH_DOCTOR: 'LOAD_SEARCH_DOCTOR',
  LOAD_SEARCH_DOCTOR_SUCCESS: 'LOAD_SEARCH_DOCTOR_SUCCESS',

  LOAD_DOCTOR: 'LOAD_DOCTOR',
  LOAD_DOCTOR_SUCCESS: 'LOAD_DOCTOR_SUCCESS',

  LOAD_HOSPITAL_DOCTORS: 'LOAD_HOSPITAL_DOCTORS',
  LOAD_HOSPITAL_DOCTORS_SUCCESS: 'LOAD_HOSPITAL_DOCTORS_SUCCESS',

  LOAD_SEARCH_COUNT: 'LOAD_SEARCH_COUNT',

  PAGE_NEXT: 'PAGE_NEXT',
  PAGE_PREVIOUS: 'PAGE_PREVIOUS',

  REFRESH: 'REFRESH',
  HYDRATE: 'HYDRATE',

  DOCTOR_COMMENT: 'DOCTOR_COMMENT',
  HOSPITAL_COMMENT: 'HOSPITAL_COMMENT',

  LOADING: 'LOADING',
}

export function loadingSearch(payload) {
  return {
    type: actionSearchTypes.LOADING,
    payload,
  }
}

export function refreshApp() {
  return {
    type: actionSearchTypes.REFRESH,
  }
}
export function searchFailure(error) {
  return {
    type: actionSearchTypes.FAILURE,
    error,
  }
}
export function nextPage(payload) {
  return {
    type: actionSearchTypes.PAGE_NEXT,
    payload,
  }
}
export function previousPage(payload) {
  return {
    type: actionSearchTypes.PAGE_PREVIOUS,
    payload,
  }
}

export function loadSearchHospital(typeFetch, query, page, filters) {
  return {
    type: actionSearchTypes.LOAD_SEARCH_HOSPITAL,
    typeFetch,
    query,
    page,
    filters,
  }
}

export function loadSearchData() {
  return { type: actionSearchTypes.LOAD__SEARCH_DATA }
}

export function loadHospitalDoctors(id, payload, filters, limit) {
  return {
    type: actionSearchTypes.LOAD_HOSPITAL_DOCTORS,
    id,
    payload,
    filters,
    limit,
  }
}

export function loadHospitalDoctorsSuccess(data) {
  return { type: actionSearchTypes.LOAD_HOSPITAL_DOCTORS_SUCCESS, data }
}

export function loadSearchDataSuccess(data) {
  return {
    type: actionSearchTypes.LOAD_SEARCH_DATA_SUCCESS,
    data,
  }
}

export function loadSearchDoctor(typeFetch, query, page, filters) {
  return {
    type: actionSearchTypes.LOAD_SEARCH_DOCTOR,
    typeFetch,
    query,
    page,
    filters,
  }
}

export function loadSearchDoctorSuccess(data) {
  return {
    type: actionSearchTypes.LOAD_SEARCH_DOCTOR_SUCCESS,
    data,
  }
}
export function loadDoctor(query) {
  return { type: actionSearchTypes.LOAD_DOCTOR, query }
}

export function loadDoctorSuccess(data) {
  return {
    type: actionSearchTypes.LOAD_DOCTOR_SUCCESS,
    data,
  }
}

export function setSearchCount(data) {
  return {
    type: actionSearchTypes.LOAD_SEARCH_COUNT,
    data,
  }
}
export function commentDoctor(payload) {
  return {
    type: actionSearchTypes.DOCTOR_COMMENT,
    payload,
  }
}
export function commentHospital(payload) {
  return {
    type: actionSearchTypes.HOSPITAL_COMMENT,
    payload,
  }
}
