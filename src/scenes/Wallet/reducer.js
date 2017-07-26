import { combineReducers } from 'redux'

import createReducer from './scenes/Create/reducer'
import recoveryReducer from './scenes/Recovery/reducer'
import securityReducer from './scenes/Security/reducer'

const scenesReducer = combineReducers({
  create: createReducer,
  recovery: recoveryReducer,
  security: securityReducer
})

export default (state, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        scenes: scenesReducer(state && state.scenes, action)
      }
  }
}
