export const CREATE_INVOICE = 'ENTITIES/INVOICES/CREATE_INVOICE';
export const createInvoice = (id, payload) => ({ type: CREATE_INVOICE, id, payload });

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_INVOICE:
      return {
        ...state,
        [action.id]: action.payload
      };
    default:
      return state
  }
}
