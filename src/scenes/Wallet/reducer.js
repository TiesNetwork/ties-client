import { combineReducers } from 'redux'

import recoveryReducer from './scenes/Recovery/reducer'

const scenesReducer = combineReducers({
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
