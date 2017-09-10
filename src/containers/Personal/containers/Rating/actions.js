/** Actions **/
import { setRating } from '../../../../entities/users';

export const GET_RATING_FAILURE = 'CONTAINERS/RATING/GET_RATING_FAILURE';
export const GET_RATING_REQUEST = 'CONTAINERS/RATING/GET_RATING_REQUEST';
export const GET_RATING_SUCCESS = 'CONTAINERS/RATING/GET_RATING_SUCCESS';

export const getRating = address => (dispatch, getState, { api }) => dispatch({
  types: [GET_RATING_REQUEST, GET_RATING_SUCCESS, GET_RATING_FAILURE],
  promise: api.users.getRating(address)
    .then(response => dispatch(setRating(address, response)))
});
