import { normalize } from 'normalizr';
import { reset } from 'redux-form';

/** Actions **/
import { updateEntities } from '../../entities';
import { addMessage } from '../../entities/messages';

export const FETCH_USER_FAILURE = 'SCENES/MESSAGES/FETCH_USER_FAILURE';
export const FETCH_USER_REQUEST = 'SCENES/MESSAGES/FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'SCENES/MESSAGES/FETCH_USER_SUCCESS';

export const fetchUser = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE],
  promise: api.users.get(address)
    .then(response => {
      const data = normalize(response, [schema.user]);
      dispatch(updateEntities(data));
    })
});

export const SEND_MESSAGE_FAILURE = 'SCENES/MESSAGES/SEND_MESSAGE_FAILURE';
export const SEND_MESSAGE_REQUEST = 'SCENES/MESSAGES/SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SCENES/MESSAGES/SEND_MESSAGE_SUCCESS';

export const sendMessage = (address, message) => (dispatch, getState, { api }) => dispatch({
  types: [SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE],
  promise: api.messages.send(address, message)
    .then(response => {
      dispatch(addMessage({
        address: address,
        date: new Date(),
        from: getState().entities.account.address,
        text: message
      }));

      dispatch(reset('MessagesForm'));
    })
});

export { createDialog } from '../../entities/dialogs';
