import { combineReducers } from 'redux'

import userReducer from './user'
import walletReducer from './wallet'

export default combineReducers({
  user: userReducer,
  wallet: walletReducer
})
