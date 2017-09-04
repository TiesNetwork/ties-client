import { combineReducers } from 'redux';

/** Reducers **/
import containersReducer from './Private/containers/reducer';
import searchReducer from './Private/scenes/Search/reducer';

const scenesReducer = combineReducers({
  containers: containersReducer,
  search: searchReducer
});

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return scenesReducer(state, action);
  }
};
