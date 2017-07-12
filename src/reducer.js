import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import scenesReducer from './scenes/reducer'

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  scenes: scenesReducer
})
