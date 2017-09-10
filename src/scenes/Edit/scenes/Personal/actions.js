/** Actions **/
import { updateUser } from '../../../../entities/users';

export const UPDATE_PERSONAL_FAILURE = 'SCENES/EDIT/UPDATE_PERSONAL_FAILURE';
export const UPDATE_PERSONAL_REQUEST = 'SCENES/EDIT/UPDATE_PERSONAL_REQUEST';
export const UPDATE_PERSONAL_SUCCESS = 'SCENES/EDIT/UPDATE_PERSONAL_SUCCESS';

export const updatePersonal = values => (dispatch, getState, { api, schema }) => dispatch({
  types: [UPDATE_PERSONAL_REQUEST, UPDATE_PERSONAL_SUCCESS, UPDATE_PERSONAL_FAILURE],
  promise: api.account.setInfo(values)
    .then(response => { dispatch(updateUser(response.address, response)) })
});
