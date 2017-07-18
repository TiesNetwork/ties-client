import { merge } from 'lodash'
import { combineReducers } from 'redux'

import userReducer from './user'
import walletReducer from './wallet'

const modelsReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer
})

export const UPDATE_ENTITIES = 'ENTITIES/UPDATE_ENTITIES'
export const updateEntities = data => ({ type: UPDATE_ENTITIES, payload: data })

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ENTITIES:
      return merge({}, state, action.payload)
    default:
      return modelsReducer(state, action)
  }
}
