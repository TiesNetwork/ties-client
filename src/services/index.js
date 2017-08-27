import { combineReducers } from 'redux'

/** Service reducers **/
import modalsReducer from './modals'
import sessionReducer from './session'

export default combineReducers({
  modals: modalsReducer,
  session: sessionReducer
})
