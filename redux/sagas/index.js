import { all, fork } from 'redux-saga/effects'

import * as searchSaga from './searchSaga'
import * as authSaga from './authSaga'
import * as dashboardSaga from './dashboardSaga'

export default function* rootSaga() {
  yield all(
    [...Object.values(searchSaga), ...Object.values(authSaga), ...Object.values(dashboardSaga)].map(fork)
  )
}
