/** Actions **/
import { deleteContact as deleteContactFromUser, updateContacts } from '../../../../../../../../entities/users';

export const ADD_CONTACT_FAILURE = 'SCENES/USERS/ADD_CONTACT_FAILURE';
export const ADD_CONTACT_REQUEST = 'SCENES/USERS/ADD_CONTACT_REQUEST';
export const ADD_CONTACT_SUCCESS = 'SCENES/USERS/ADD_CONTACT_SUCCESS';

export const addContact = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILURE],
  promise: api.contacts.add(address)
    .then(response => dispatch(updateContacts(getState().entities.account.address, address)))
});

export const DELETE_CONTACT_FAILURE = 'SCENES/USERS/DELETE_CONTACT_FAILURE';
export const DELETE_CONTACT_REQUEST = 'SCENES/USERS/DELETE_CONTACT_REQUEST';
export const DELETE_CONTACT_SUCCESS = 'SCENES/USERS/DELETE_CONTACT_SUCCESS';

export const deleteContact = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE],
  promise: api.contacts.delete(address)
    .then(response => dispatch(deleteContactFromUser(getState().entities.account.address, address)))
});
