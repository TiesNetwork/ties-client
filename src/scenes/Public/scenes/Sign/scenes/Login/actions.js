import { normalize } from 'normalizr';

/** Actions **/
import { updateEntities } from '../../../../../../entities';
import { setCurrentUserId } from '../../../../../../services/session';

export const SIGN_RECOVER_FAILURE = 'SCENES/SIGN/RECOVER_REQUEST';
export const SIGN_RECOVER_REQUEST = 'SCENES/SIGN/RECOVER_REQUEST';
export const SIGN_RECOVER_SUCCESS = 'SCENES/SIGN/RECOVER_REQUEST';

export const login = password => (dispatch, getState, { api, push, schema }) => dispatch({
  types: [SIGN_RECOVER_REQUEST, SIGN_RECOVER_SUCCESS, SIGN_RECOVER_FAILURE],
  promise: api.account.login(password)
    .then(response => {
      const data = normalize(response, {
        users: [schema.user],
        wallets: [schema.wallet]
      });

      dispatch(setCurrentUserId(data.result.wallets[0]));
      dispatch(updateEntities(data));

      dispatch(push(`/users/${data.result.wallets[0]}`));
    })
});
