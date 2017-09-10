import { normalize } from 'normalizr';

/** Actions **/
import { updateEntities } from '../../../../entities';
import { updateContacts } from '../../../../entities/users';

export const FETCH_CONTACTS_FAILURE = 'SCENES/USER/FETCH_CONTACTS_FAILURE';
export const FETCH_CONTACTS_REQUEST = 'SCENES/USER/FETCH_CONTACTS_REQUEST';
export const FETCH_CONTACTS_SUCCESS = 'SCENES/USER/FETCH_CONTACTS_SUCCESS';

export const fetchContacts = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE],
  promise: api.contacts.get(address)
    .then(response => {
      const data = normalize(response, [schema.user]);

      dispatch(updateEntities(data));
      dispatch(updateContacts(address, data.result));
    })
});
