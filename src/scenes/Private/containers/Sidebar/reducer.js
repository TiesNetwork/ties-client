/** Reducers **/
import containersReducer from './containers/reducer';

export default (state = {}, action) => {
  switch (action.type) {
    default:
      return {
        containers: containersReducer(state.containers, action)
      };
  }
};
