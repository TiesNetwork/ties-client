import { normalize } from 'normalizr';

/** Actions **/
import { updateEntities } from '../../../../entities';
import { setId as setCurrentUserId } from '../../../../entities/account';

export const SIGN_RECOVER_FAILURE = 'SCENES/SIGN/RECOVER_REQUEST';
export const SIGN_RECOVER_REQUEST = 'SCENES/SIGN/RECOVER_REQUEST';
export const SIGN_RECOVER_SUCCESS = 'SCENES/SIGN/RECOVER_REQUEST';

export const recover = (phrase, password) => (dispatch, getState, { api, push, schema }) => dispatch({
  types: [SIGN_RECOVER_REQUEST, SIGN_RECOVER_SUCCESS, SIGN_RECOVER_FAILURE],
  promise: api.account.recover(phrase, password)
    .then(response => {
      const data = normalize(response, {
        users: [schema.user],
        wallets: [schema.wallet]
      });

      dispatch(setCurrentUserId(data.result.wallets[0]));
      dispatch(updateEntities(data));

      dispatch(push('/sign/recovery'));
    })
})
