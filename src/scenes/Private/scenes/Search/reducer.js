import {
  SET_RESULT
} from './actions';

export default (state = {
  result: null
}, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.payload
      };
    default:
      return state;
  }
};
