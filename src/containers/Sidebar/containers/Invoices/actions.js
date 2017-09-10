import { normalize } from 'normalizr';

/** Actions **/
import { updateEntities } from '../../../../entities';

export const FETCH_INVOICE_FAILURE = 'CONTAINERS/SIDEBAR/FETCH_INVOICE_FAILURE';
export const FETCH_INVOICE_REQUEST = 'CONTAINERS/SIDEBAR/FETCH_INVOICE_REQUEST';
export const FETCH_INVOICE_SUCCESS = 'CONTAINERS/SIDEBAR/FETCH_INVOICE_SUCCESS';

export const fetchInvoices = () => (dispatch, getState, { api, schema }) => dispatch({
  types: [FETCH_INVOICE_REQUEST, FETCH_INVOICE_SUCCESS, FETCH_INVOICE_FAILURE],
  promise: api.invoices.get()
    .then(response => {
      const data = normalize(response, [schema.invoice]);

      dispatch(updateEntities(data));
    })
});
