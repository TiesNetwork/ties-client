import scenesReducer from './scenes/reducer'

export default (state, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        scenes: scenesReducer(state, action)
      }
  }
}
