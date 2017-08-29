import { combineReducers } from 'redux';

/** Reducers **/
import searchReducer from './Private/scenes/Search/reducer';

const scenesReducer = combineReducers({
  search: searchReducer
});

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return scenesReducer(state, action);
  }
};
