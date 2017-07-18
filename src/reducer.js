import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import entitiesReducer from './entities/reducer'
import scenesReducer from './scenes/reducer'

export default combineReducers({
  entities: entitiesReducer,
  form: formReducer,
  router: routerReducer,
  scenes: scenesReducer
})
