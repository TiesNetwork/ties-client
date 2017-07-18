import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import accessReducer from './redux/access'
import entitiesReducer from './redux/entities'
import scenesReducer from './scenes/reducer'

export default combineReducers({
  access: accessReducer,
  entities: entitiesReducer,
  form: formReducer,
  router: routerReducer,
  scenes: scenesReducer
})
