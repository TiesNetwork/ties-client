export const SEND_MESSAGE_FAILURE = 'SCENES/MESSAGES/SEND_MESSAGE_FAILURE';
export const SEND_MESSAGE_REQUEST = 'SCENES/MESSAGES/SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SCENES/MESSAGES/SEND_MESSAGE_SUCCESS';

export const sendMessage = message => (dispatch, getState, { api }) => dispatch({
  types: [SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE],
  promise: api.messages.send(message)
    .then(response => console.log(response))
});
