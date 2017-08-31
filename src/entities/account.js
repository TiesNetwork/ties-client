export const SET_ID = 'ENTITIES/ACCOUNT/SET_ID';
export const setId = payload => ({ type: SET_ID, payload });

export const UPDATE_BALANCE = 'ENTITIES/ACCOUNT/UPDATE_BALANCE';
export const updateBalance = payload => ({ type: UPDATE_BALANCE, payload });

export const UPDATE_TRANSFERS = 'ENTITIES/ACCOUNT/UPDATE_TRANSFERS';
export const updateTransfers = payload => ({ type: UPDATE_TRANSFERS, payload });

export default (state = {
  balance: null,
  id: null,
  transfers: null
}, action) => {
  switch (action.type) {
    case SET_ID:
      return {
        balance: null,
        id: action.payload
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
