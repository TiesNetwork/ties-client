export const CREATE_DIALOG = 'ENTITIES/DIALOGS/CREATE_DIALOG';
export const createDialog = address => ({ type: CREATE_DIALOG, address });

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_DIALOG:
      return {
        ...state,
        [action.address]: {
          address: action.address
        }
      };
    default:
      return state;
  }
}
