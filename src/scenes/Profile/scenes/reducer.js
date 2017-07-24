import { combineReducers } from 'redux'

import editReducer from './Edit/reducer'

const scenesReducer = combineReducers({
  edit: editReducer
})

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return scenesReducer(state, action)
  }
}
