import { push, routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import entitiesReducer from './redux/entities'
import sessionReducer from './redux/session'
import scenesReducer from './scenes/reducer'

import Client from './utils/client'

const reducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  scenes: scenesReducer,

  form: formReducer,
  router: routerReducer
})

export default history => createStore(reducer, applyMiddleware(
  thunkMiddleware.withExtraArgument({ client: new Client(), push: push }),
  loggerMiddleware,
  routerMiddleware(history)
))
