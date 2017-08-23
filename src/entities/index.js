import { combineReducers } from 'redux'

/** Model reducers **/
import projectsReducer from './projects'
import usersReducer from './users'
import walletsReducer from './wallets'

const modelsReducer = combineReducers({
  projects: projectsReducer,
  users: usersReducer,
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
