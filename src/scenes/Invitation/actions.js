/** Actions **/
import { setInvitationCode } from '../../entities/account';

export const CREATE_INVITATION_CODE_FAILURE = 'SCENES/INVITATION/CREATE_INVITATION_CODE_FAILURE';
export const CREATE_INVITATION_CODE_REQUEST = 'SCENES/INVITATION/CREATE_INVITATION_CODE_REQUEST';
export const CREATE_INVITATION_CODE_SUCCESS = 'SCENES/INVITATION/CREATE_INVITATION_CODE_SUCCESS';

export const createInvitationCode = () => (dispatch, getState, { api }) => dispatch({
  types: [CREATE_INVITATION_CODE_REQUEST, CREATE_INVITATION_CODE_SUCCESS, CREATE_INVITATION_CODE_FAILURE],
  promise: api.invitations.create()
    .then(response => dispatch(setInvitationCode(response)))
});

export const GET_INVITATION_CODE_FAILURE = 'SCENES/INVITATION/GET_INVITATION_CODE_FAILURE';
export const GET_INVITATION_CODE_REQUEST = 'SCENES/INVITATION/GET_INVITATION_CODE_REQUEST';
export const GET_INVITATION_CODE_SUCCESS = 'SCENES/INVITATION/GET_INVITATION_CODE_SUCCESS';

export const getInvitationCode = () => (dispatch, getState, { api }) => dispatch({
  types: [GET_INVITATION_CODE_REQUEST, GET_INVITATION_CODE_SUCCESS, GET_INVITATION_CODE_FAILURE],
  promise: api.invitations.get()
    .then(response => dispatch(setInvitationCode(response)))
});
