import { combineReducers } from 'redux'
import app from './appReducer'
import auth from './authReducer'
import search from './searchReducer'
import dashboard from './dashboardReducer'

const rootReducer = combineReducers({
  app,
  auth,
  search,
  dashboard,
})

export default rootReducer;
