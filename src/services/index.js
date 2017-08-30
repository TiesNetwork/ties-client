import { combineReducers } from 'redux'

/** Service reducers **/
import modalsReducer from './modals'

export default combineReducers({
  modals: modalsReducer
})
