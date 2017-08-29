/** Actions **/
import { updateBalance } from '../../entities/account';

export const GET_BALANCE_FAILURE = 'SCENES/PRIVATE/GET_BALANCE_FAILURE';
export const GET_BALANCE_REQUEST = 'SCENES/PRIVATE/GET_BALANCE_REQUEST';
export const GET_BALANCE_SUCCESS = 'SCENES/PRIVATE/GET_BALANCE_SUCCESS';

export const getBalance = () => (dispatch, getState, { api }) => dispatch({
  types: [GET_BALANCE_REQUEST, GET_BALANCE_SUCCESS, GET_BALANCE_FAILURE],
  promise: api.account.getBalance()
    .then(response => dispatch(updateBalance(response)))
});
