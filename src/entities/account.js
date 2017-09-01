export const DELETE_INVITATION_CODE = 'ENTITIES/ACCOUNT/DELETE_INVITATION_CODE';
export const deleteInvitationCode = payload => ({ type: DELETE_INVITATION_CODE, payload });

export const SET_ID = 'ENTITIES/ACCOUNT/SET_ID';
export const setId = payload => ({ type: SET_ID, payload });

export const SET_INVITATION_CODE = 'ENTITIES/ACCOUNT/SET_INVITATION_CODE';
export const setInvitationCode = payload => ({ type: SET_INVITATION_CODE, payload });

export const UPDATE_BALANCE = 'ENTITIES/ACCOUNT/UPDATE_BALANCE';
export const updateBalance = payload => ({ type: UPDATE_BALANCE, payload });

export const UPDATE_TRANSFERS = 'ENTITIES/ACCOUNT/UPDATE_TRANSFERS';
export const updateTransfers = payload => ({ type: UPDATE_TRANSFERS, payload });

export default (state = {
  address: null,
  balance: null,
  id: null,
  invitationCode: null,
  transfers: null
}, action) => {
  switch (action.type) {
    case DELETE_INVITATION_CODE:
      return {
        ...state,
        invitationCode: null
      }
    case SET_ID:
      return {
        address: action.payload,
        balance: null,
        id: action.payload
      };
    case SET_INVITATION_CODE:
      return {
        ...state,
        invitationCode: action.payload
      };
    case UPDATE_BALANCE:
      return {
        ...state,
        balance: {
          ...state.balance,
          ...action.payload
        }
      };
    case UPDATE_TRANSFERS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
