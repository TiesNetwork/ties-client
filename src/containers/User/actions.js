import { normalize } from 'normalizr';

/** Actions **/
import { updateEntities } from '../../entities';

export const FETCH_USER_FAILURE = 'CONTAINERS/USER/FETCH_USER_FAILURE';
export const FETCH_USER_REQUEST = 'CONTAINERS/USER/FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'CONTAINERS/USER/FETCH_USER_SUCCESS';

export const fetchUser = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
  promise: api.users.get(address)
    .then(response => {
      const data = normalize(response, [schema.user]);
      dispatch(updateEntities(data));
    })
});
