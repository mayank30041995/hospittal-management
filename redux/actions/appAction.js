export const actionTypes = {
  APP_LOADING: 'APP_LOADING',
  UPLOAD_PROFILE_PHOTO: 'UPLOAD_PROFILE_PHOTO',
  DRAWER: 'DRAWER',
  ROLE: 'ROLE',
  FILTER_ACTIONS: 'FILTER_ACTIONS',
  STEP: 'STEP',
  FORM_ONE: 'FORM_ONE',
  FORM_TWO: 'FORM_TWO',
  FORM_THREE: 'FORM_THREE',

  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  LOAD_SEARCH_OPTIONS: 'LOAD_SEARCH_OPTIONS',
  LOAD_SEARCH_OPTIONS_SUCCESS: 'LOAD_SEARCH_OPTIONS_SUCCESS',
  LOAD_APP: 'LOAD_APP',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
  HYDRATE: 'HYDRATE',
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export function loadingApp(payload) {
  return { type: actionTypes.APP_LOADING, payload }
}
export function uploadProfile(payload) {
  return { type: actionTypes.UPLOAD_PROFILE_PHOTO, payload }
}
export function drawerFilter(payload) {
  return { type: actionTypes.DRAWER, payload }
}
export function filterActions(payload) {
  return { type: actionTypes.FILTER_ACTIONS, payload }
}

export function roleSave(payload) {
  return { type: actionTypes.ROLE, payload }
}
export function step(payload) {
  return { type: actionTypes.STEP, payload }
}
export function formOne(payload) {
  return { type: actionTypes.FORM_ONE, payload }
}
export function formTwo(payload) {
  return { type: actionTypes.FORM_TWO, payload }
}
export function formThree(payload) {
  return { type: actionTypes.FORM_THREE, payload }
}

export function loadDefaultOptions() {
  return { type: actionTypes.LOAD_SEARCH_OPTIONS }
}
export function loadDefaultOptionsSuccess(payload) {
  return { type: actionTypes.LOAD_SEARCH_OPTIONS_SUCCESS, payload }
}


export function increment() {
  return { type: actionTypes.INCREMENT }
}

export function decrement() {
  return { type: actionTypes.DECREMENT }
}

export function loadApp() {
  return { type: actionTypes.LOAD_APP }
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA }
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  }
}

export function startClock() {
  return { type: actionTypes.START_CLOCK }
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  }
}
