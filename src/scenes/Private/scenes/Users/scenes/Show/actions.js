import { normalize } from 'normalizr';

/** Actions **/
import { updateProjects } from '../../../../../../entities/users';
import { updateEntities } from '../../../../../../entities';

export const ADD_CONTACT_FAILURE = 'SCENES/USERS/ADD_CONTACT_FAILURE';
export const ADD_CONTACT_REQUEST = 'SCENES/USERS/ADD_CONTACT_REQUEST';
export const ADD_CONTACT_SUCCESS = 'SCENES/USERS/ADD_CONTACT_SUCCESS';

export const addContact = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, ADD_CONTACT_FAILURE],
  promise: api.contacts.add(address)
    .then(response => console.log(response))
});

export const GET_CONTACTS_FAILURE = 'SCENES/USER/GET_CONTACTS_FAILURE';
export const GET_CONTACTS_REQUEST = 'SCENES/USER/GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'SCENES/USER/GET_CONTACTS_SUCCESS';

export const getContacts = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE],
  promise: api.contacts.get(address)
    .then(response => console.log(response))
});

export const GET_PROJECTS_FAILURE = 'SCENES/USER/GET_PROJECTS_FAILURE';
export const GET_PROJECTS_REQUEST = 'SCENES/USER/GET_PROJECTS_REQUEST';
export const GET_PROJECTS_SUCCESS = 'SCENES/USER/GET_PROJECTS_SUCCESS';

export const getProjects = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE],
  promise: api.projects.getByAddress(address)
    .then(response => {
      const data = normalize(response, [schema.project])

      dispatch(updateEntities(data))
      dispatch(updateProjects(address, data.result))
    })
});
