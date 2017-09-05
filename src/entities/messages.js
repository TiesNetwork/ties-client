export const ADD_MESSAGE = 'ENTITIES/MESSAGES/ADD_MESSAGE';
export const addMessage = payload => ({
  type: ADD_MESSAGE, payload
});

export default (state = {
  items: []
}, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        items: [ ...state.items, action.payload ]
      };
    default:
      return state;
  }
}
