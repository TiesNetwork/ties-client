import { SELECT_CONTAINER } from './actions';

/** Reducers **/
import containersReducer from './containers/reducer';

export default (state = {
  current: 'Contacts'
}, action) => {
  switch (action.type) {
    case SELECT_CONTAINER:
      return {
        ...state,
        current: action.id
      };
    default:
      return {
        ...state,
        containers: containersReducer(state.containers, action)
      };
  }
};
