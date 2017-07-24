import scenesReducer from './scenes/reducer'

export default (state = { scenes: null }, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        scenes: scenesReducer(state, action)
      }
  }
}
