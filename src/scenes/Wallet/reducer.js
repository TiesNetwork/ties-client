import { combineReducers } from 'redux'

import createReducer from './scenes/Create/reducer'

const scenesReducer = combineReducers({
  create: createReducer
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
