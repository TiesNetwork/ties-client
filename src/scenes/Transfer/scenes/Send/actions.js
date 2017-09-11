/** Actions **/
import { setTransaction as setTransactionToInvoice } from '../../../../entities/invoices';
import { updateTransaction } from '../../../../entities/transactions';

export const SEND_TRANSFER_FAILURE = 'SCENES/TRANSFER/SEND_TRANSFER_FAILURE';
export const SEND_TRANSFER_REQUEST = 'SCENES/TRANSFER/SEND_TRANSFER_REQUEST';
export const SEND_TRANSFER_SUCCESS = 'SCENES/TRANSFER/SEND_TRANSFER_SUCCESS';

export const sendTransfer = ({ address, currency, invoice, sum }) => (dispatch, getState, { api, replace, schema }) => dispatch({
  types: [SEND_TRANSFER_REQUEST, SEND_TRANSFER_SUCCESS, SEND_TRANSFER_FAILURE],
  promise: api.transfers.send(address, currency, sum)
    .then(response => {
      invoice && dispatch(setTransaction(invoice, response.tx));
      dispatch(updateTransaction(response.tx, {
        address: address,
        currency: currency,
        sum: sum,
        tx: response.tx
      }));
      dispatch(replace(`/transaction/${response.tx}`));
    })
});

export const SET_TRANSACTION_FAILURE = 'SCENES/TRANSFER/SET_TRANSACTION_FAILURE';
export const SET_TRANSACTION_REQUEST = 'SCENES/TRANSFER/SET_TRANSACTION_REQUEST';
export const SET_TRANSACTION_SUCCESS = 'SCENES/TRANSFER/SET_TRANSACTION_SUCCESS';

export const setTransaction = (id, tx) => (dispatch, getState, { api }) => dispatch({
  types: [SET_TRANSACTION_REQUEST, SET_TRANSACTION_SUCCESS, SET_TRANSACTION_FAILURE],
  promise: api.invoices.setTransaction(id, tx)
    .then(response => dispatch(setTransactionToInvoice(id, tx)))
});
