export const CREATE_INVOICE = 'ENTITIES/INVOICES/CREATE_INVOICE';
export const createInvoice = (id, payload) => ({ type: CREATE_INVOICE, id, payload });

export const SET_TRANSACTION = 'ENTITIES/INVOICES/SET_TRANSACTION';
export const setTransaction = (id, payload) => ({ type: SET_TRANSACTION, id, payload });

export default (state = {}, action) => {
  const invoice = state[action.id];

  switch (action.type) {
    case CREATE_INVOICE:
      return {
        ...state,
        [action.id]: action.payload
      };
    case SET_TRANSACTION:
      return {
        ...state,
        [action.id]: {
          ...invoice,
          transaction: action.payload
        }
      };
    default:
      return state
  }
}
