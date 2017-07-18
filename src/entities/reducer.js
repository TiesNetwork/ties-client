import { merge } from 'lodash'
import { combineReducers } from 'redux'

import { UPDATE_ENTITIES } from './actions'

import userReducer from './user'
import walletReducer from './wallet'

const modelsReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer
})

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ENTITIES:
      return merge({}, state, action.payload)
    default:
      return modelsReducer(state, action)
  }
}
