export const UPDATE_BALANCE = 'ENTITIES/ACCOUNT/UPDATE_BALANCE';
export const updateBalance = payload => ({ type: UPDATE_BALANCE, payload });

export default (state = {
  balance: null,
  id: null
}, action) => {
  switch (action.type) {
    case UPDATE_BALANCE:
      return {
        ...state,
        balance: {
          ...state.balance,
          ...action.payload
        }
      };
    default:
      return state;
  }
};
