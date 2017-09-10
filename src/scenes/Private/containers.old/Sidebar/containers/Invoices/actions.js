import { normalize } from 'normalizr';

/** Actions **/
import { updateEntities } from '../../../../../../entities';

export const GET_INVOICES_FAILURE = 'SCENES/GET_INVOICES_FAILURE';
export const GET_INVOICES_REQUEST = 'SCENES/GET_INVOICES_REQUEST';
export const GET_INVOICES_SUCCESS = 'SCENES/GET_INVOICES_SUCCESS';

export const getInvoices = () => (dispatch, getState, { api, schema }) => dispatch({
  types: [GET_INVOICES_REQUEST, GET_INVOICES_SUCCESS, GET_INVOICES_FAILURE],
  promise: api.invoices.get()
    .then(response => {
      const data = normalize(response, [schema.invoice]);

      dispatch(updateEntities(data));
      dispatch(setInvoices(data.result));
    })
});

export const SET_INVOICES = 'SCENES/SET_INVOICES';
export const setInvoices = payload => ({
  type: SET_INVOICES, payload
});
