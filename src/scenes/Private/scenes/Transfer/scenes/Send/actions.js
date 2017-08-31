import { normalize } from 'normalizr';

/** Actions **/
import { updateTransfers } from '../../../../../../entities/account';

export const SEND_TRANSFER_FAILURE = 'SCENES/TRANSFER/SEND_TRANSFER_FAILURE';
export const SEND_TRANSFER_REQUEST = 'SCENES/TRANSFER/SEND_TRANSFER_REQUEST';
export const SEND_TRANSFER_SUCCESS = 'SCENES/TRANSFER/SEND_TRANSFER_SUCCESS';

export const sendTransfer = (address, sum) => (dispatch, getState, { api, push, schema }) => dispatch({
  types: [SEND_TRANSFER_REQUEST, SEND_TRANSFER_SUCCESS, SEND_TRANSFER_FAILURE],
  promise: api.transfers.send(address, sum)
    .then(response => {
      const data = normalize(response, [schema.transfer]);

      dispatch(updateTransfers(data.entities));
      dispatch(push(`/private/transfer/${data.result[0]}`));
    })
});
