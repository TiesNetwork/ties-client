import { combineReducers } from 'redux'

import personalReducer from './scenes/Personal/reducer'

const scenesReducer = combineReducers({
  personal: personalReducer
})

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        scenes: scenesReducer(state && state.scenes, action)
      }
  }
}
