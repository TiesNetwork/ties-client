import { combineReducers } from 'redux'

import walletsReducer from './models/wallets'

const modelsReducer = combineReducers({
  wallets: walletsReducer
})

export const UPDATE_ENTITIES = 'ENTITIES/UPDATE'
export const updateEntities = data => ({ type: UPDATE_ENTITIES, data })

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ENTITIES:
      return _.merge({}, state, action.data.entities)
    default:
      return modelsReducer(state, action)
  }
}
