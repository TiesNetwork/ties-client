import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import dataReducer from './data/reducer'
import scenesReducer from './scenes/reducer'

export default combineReducers({
  data: dataReducer,
  form: formReducer,
  router: routerReducer,
  scenes: scenesReducer
})
