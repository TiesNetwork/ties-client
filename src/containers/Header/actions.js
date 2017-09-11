/** Actions **/
import { updateBalance } from '../../entities/account';

export const FETCH_BALANCE_FAILURE = 'CONTAINERS/HEADER/FETCH_BALANCE_FAILURE';
export const FETCH_BALANCE_REQUEST = 'CONTAINERS/HEADER/FETCH_BALANCE_REQUEST';
export const FETCH_BALANCE_SUCCESS = 'CONTAINERS/HEADER/FETCH_BALANCE_SUCCESS';

export const fetchBalance = () => (dispatch, getState, { api }) => dispatch({
  types: [FETCH_BALANCE_REQUEST, FETCH_BALANCE_SUCCESS, FETCH_BALANCE_FAILURE],
  promise: api.account.getBalance()
    .then(response => dispatch(updateBalance(response)))
});

export { updateBalance };
