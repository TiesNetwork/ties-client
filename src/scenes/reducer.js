import { combineReducers } from 'redux'

import loginReducer from './Profile/reducer'
import profileReducer from './Profile/reducer'
import walletReducer from './Wallet/reducer'

export default combineReducers({
  login: loginReducer,
  profile: profileReducer,
  wallet: walletReducer
})
