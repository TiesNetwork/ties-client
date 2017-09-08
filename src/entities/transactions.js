export const UPDATE_TRANSACTION = 'ENTITIES/TRANSACTIONS/UPDATE_TRANSACTION';
export const updateTransaction = (address, payload) => ({ type: UPDATE_TRANSACTION, address, payload });

export default (state = {}, action) => {
  const transaction = state[action.address];

  switch (action.type) {
    case UPDATE_TRANSACTION:
      return {
        ...state,
        [action.address]: {
          ...transaction,
          ...action.payload
        }
      };
    default:
      return state;
  }
};
