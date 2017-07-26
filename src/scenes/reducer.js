import { combineReducers } from 'redux'

import loginReducer from './Login/reducer'
import profileReducer from './Profile/reducer'
import walletReducer from './Wallet/reducer'

const scenesReducer = combineReducers({
  login: loginReducer,
  profile: profileReducer,
  wallet: walletReducer
})

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return scenesReducer(state, action)
  }
}
