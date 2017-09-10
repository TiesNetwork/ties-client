import { combineReducers } from 'redux';

/** Reducers **/
import sidebarReducer from './Sidebar/reducer';

const containersReducer = combineReducers({
  sidebar: sidebarReducer
});

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return containersReducer(state, action);
  }
};
