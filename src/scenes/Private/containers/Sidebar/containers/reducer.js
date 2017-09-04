import { combineReducers } from 'redux';

/** Reducers **/
import invoicesReducer from './Invoices/reducer';

const containersReducer = combineReducers({
  invoices: invoicesReducer
});

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return containersReducer(state, action);
  }
};
