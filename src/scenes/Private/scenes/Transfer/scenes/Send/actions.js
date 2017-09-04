import { normalize } from 'normalizr';

/** Actions **/
import { updateTransfers } from '../../../../../../entities/account';

export const SEND_TRANSFER_FAILURE = 'SCENES/TRANSFER/SEND_TRANSFER_FAILURE';
export const SEND_TRANSFER_REQUEST = 'SCENES/TRANSFER/SEND_TRANSFER_REQUEST';
export const SEND_TRANSFER_SUCCESS = 'SCENES/TRANSFER/SEND_TRANSFER_SUCCESS';

export const sendTransfer = (address, sum, invoiceId) => (dispatch, getState, { api, replace, schema }) => dispatch({
  types: [SEND_TRANSFER_REQUEST, SEND_TRANSFER_SUCCESS, SEND_TRANSFER_FAILURE],
  promise: api.transfers.send(address, sum)
    .then(response => {
      const data = normalize(response, [schema.transfer]);

      dispatch(updateTransfers(data.entities));

      invoiceId && dispatch(setTransaction(invoiceId, data.result[0]));
      dispatch(replace(invoiceId ? `/private/invoice/${invoiceId}` : `/private/transfer/${data.result[0]}`));
    })
});

export const SET_TRANSACTION_FAILURE = 'SCENES/TRANSFER/SET_TRANSACTION_FAILURE';
export const SET_TRANSACTION_REQUEST = 'SCENES/TRANSFER/SET_TRANSACTION_REQUEST';
export const SET_TRANSACTION_SUCCESS = 'SCENES/TRANSFER/SET_TRANSACTION_SUCCESS';

export const setTransaction = (invoiceId, tx) => (dispatch, getState, { api }) => dispatch({
  types: [SEND_TRANSFER_REQUEST, SEND_TRANSFER_SUCCESS, SET_TRANSACTION_FAILURE],
  promise: api.invoices.setTransaction(invoiceId, tx)
})
