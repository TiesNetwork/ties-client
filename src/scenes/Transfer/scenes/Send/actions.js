/** Actions **/
import { updateTransaction } from '../../../../entities/transactions';

export const SEND_TRANSFER_FAILURE = 'SCENES/TRANSFER/SEND_TRANSFER_FAILURE';
export const SEND_TRANSFER_REQUEST = 'SCENES/TRANSFER/SEND_TRANSFER_REQUEST';
export const SEND_TRANSFER_SUCCESS = 'SCENES/TRANSFER/SEND_TRANSFER_SUCCESS';

export const sendTransfer = (address, currency, sum) => (dispatch, getState, { api, replace, schema }) => dispatch({
  types: [SEND_TRANSFER_REQUEST, SEND_TRANSFER_SUCCESS, SEND_TRANSFER_FAILURE],
  promise: api.transfers.send(address, currency, sum)
    .then(response => {
      dispatch(updateTransaction(response.tx, response));
      dispatch(replace(`/transaction/${response.tx}`));
    })
});
