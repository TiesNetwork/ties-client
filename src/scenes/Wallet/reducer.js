import { combineReducers } from 'redux'

import createReducer from './scenes/Create/reducer'
import recoveryReducer from './scenes/Recovery/reducer'

const scenesReducer = combineReducers({
  create: createReducer,
  recovery: recoveryReducer
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
