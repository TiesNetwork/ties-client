import { normalize } from 'normalizr';

/** Actions **/
import { updateEntities } from '../../../../entities';

export const SEARCH_FAILURE = 'SCENES/SEARCH_FAILURE';
export const SEARCH_REQUEST = 'SCENES/SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SCENES/SEARCH_SUCCESS';

export const search = text => (dispatch, getState, { api, schema }) => dispatch({
  types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
  promise: api.search(text)
    .then(response => {
      const data = normalize(response, {
        users: [schema.user]
      });

      dispatch(updateEntities(data));
      dispatch(setResult(data.result));
    })
})

export const SET_RESULT = 'SCENES/SEARCH/SET_RESULT';
export const setResult = result => ({ type: SET_RESULT, result });
