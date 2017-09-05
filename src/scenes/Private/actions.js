import { normalize } from 'normalizr';

/** Actions **/
import { updateBalance } from '../../entities/account';
import { addMessage } from '../../entities/messages';
import { setOnline, updateContacts } from '../../entities/users';
import { updateEntities } from '../../entities';

export const GET_BALANCE_FAILURE = 'SCENES/PRIVATE/GET_BALANCE_FAILURE';
export const GET_BALANCE_REQUEST = 'SCENES/PRIVATE/GET_BALANCE_REQUEST';
export const GET_BALANCE_SUCCESS = 'SCENES/PRIVATE/GET_BALANCE_SUCCESS';

export const getBalance = () => (dispatch, getState, { api }) => dispatch({
  types: [GET_BALANCE_REQUEST, GET_BALANCE_SUCCESS, GET_BALANCE_FAILURE],
  promise: api.account.getBalance()
    .then(response => dispatch(updateBalance(response)))
});

export const GET_CONTACTS_FAILURE = 'SCENES/PRIVATE/GET_CONTACTS_FAILURE';
export const GET_CONTACTS_REQUEST = 'SCENES/PRIVATE/GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'SCENES/PRIVATE/GET_CONTACTS_SUCCESS';

export const getContacts = () => (dispatch, getState, { api, schema }) => dispatch({
  types: [GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAILURE],
  promise: api.contacts.get(getState().entities.account.address)
    .then(response => {
      const data = normalize(response, [schema.user]);

      dispatch(updateEntities(data));
      dispatch(updateContacts(getState().entities.account.address, data.result));
    })
})

export { addMessage, setOnline, updateBalance };
