import { combineReducers } from 'redux'

import loginReducer from './Login/reducer'

export default combineReducers({
  login: loginReducer
})
