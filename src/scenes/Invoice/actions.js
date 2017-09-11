/** Actions **/
import { createInvoice as createInvoiceEntity } from '../../entities/invoices';

export const CREATE_INVOICE_FAILURE = 'SCENES/INVOICES/CREATE_INVOICE_FAILURE';
export const CREATE_INVOICE_REQUEST = 'SCENES/INVOICES/CREATE_INVOICE_REQUEST';
export const CREATE_INVOICE_SUCCESS = 'SCENES/INVOICES/CREATE_INVOICE_SUCCESS';

export const createInvoice = data => (dispatch, getState, { api, history, schema }) => dispatch({
  types: [CREATE_INVOICE_REQUEST, CREATE_INVOICE_SUCCESS, CREATE_INVOICE_FAILURE],
  promise: api.invoices.create(data)
    .then(response => {
      dispatch(createInvoiceEntity(response.id, response));
      dispatch(history.goBack());
    })
});
