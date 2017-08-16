import { combineReducers } from 'redux'

/** Reducers **/
import searchReducer from './Search/reducer'

const scenesReducer = combineReducers({
  search: searchReducer
})

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return scenesReducer(state, action)
  }
}
