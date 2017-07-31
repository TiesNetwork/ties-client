import { combineReducers } from 'redux'

import loginReducer from './Login/reducer'
import editReducer from './Edit/reducer'
import walletReducer from './Wallet/reducer'

const scenesReducer = combineReducers({
  edit: editReducer,
  login: loginReducer,
  wallet: walletReducer
})

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return scenesReducer(state, action)
  }
}
