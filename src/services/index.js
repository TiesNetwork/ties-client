import { combineReducers } from 'redux'

/** Service reducers **/
import sessionReducer from './session'

export default combineReducers({
  session: sessionReducer
})
