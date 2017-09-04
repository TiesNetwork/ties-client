import { SET_INVOICES } from './actions';

export default (state = {
  items: []
}, action) => {
  switch (action.type) {
    case SET_INVOICES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
