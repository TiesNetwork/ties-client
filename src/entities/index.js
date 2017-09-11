import { combineReducers } from 'redux';

/** Model reducers **/
import accountReducer from './account';
import dialogsReducer from './dialogs';
import invoicesReducer from './invoices';
import messagesReducer from './messages';
import projectsReducer from './projects';
import transactionsReducer from './transactions';
import usersReducer from './users';
import walletsReducer from './wallets';

const modelsReducer = combineReducers({
  account: accountReducer,
  dialogs: dialogsReducer,
  invoices: invoicesReducer,
  messages: messagesReducer,
  projects: projectsReducer,
  transactions: transactionsReducer,
  users: usersReducer,
  wallets: walletsReducer
});

export const UPDATE_ENTITIES = 'ENTITIES/UPDATE';
export const updateEntities = data => ({ type: UPDATE_ENTITIES, data });

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ENTITIES:
      return _.merge({}, state, action.data.entities);
    default:
      return modelsReducer(state, action);
  }
};
