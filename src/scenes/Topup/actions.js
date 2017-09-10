import { reset } from 'redux-form';

/** Actions **/
import { deleteInvitationCode } from '../../entities/account';

export const REDEEM_INVITATION_CODE_FAILURE = 'SCENES/TOPUP/REDEEM_INVITATION_CODE_FAILURE';
export const REDEEM_INVITATION_CODE_REQUEST = 'SCENES/TOPUP/REDEEM_INVITATION_CODE_REQUEST';
export const REDEEM_INVITATION_CODE_SUCCESS = 'SCENES/TOPUP/REDEEM_INVITATION_CODE_SUCCESS';

export const redeemInvitationCode = code => (dispatch, getState, { api }) => dispatch({
  types: [REDEEM_INVITATION_CODE_REQUEST, REDEEM_INVITATION_CODE_SUCCESS, REDEEM_INVITATION_CODE_FAILURE],
  promise: api.invitations.redeem(code)
    .then(response => {
      code === getState().entities.account.invitationCode && dispatch(deleteInvitationCode());
      dispatch(reset('TopupForm'));
    })
});
