import { combineReducers } from 'redux'

import walletReducer from './Wallet/reducer'

export default combineReducers({
  wallet: walletReducer
})
