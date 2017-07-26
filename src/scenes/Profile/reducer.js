import { combineReducers } from 'redux'

import editReducer from './scenes/Edit/reducer'

const scenesReducer = combineReducers({
  edit: editReducer
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
