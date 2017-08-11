import { push, routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

import demoState from './demo'

import Api from './api'
import * as schema from './api/schema'

/** Middleware **/
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

/** Reducers **/
import entitiesReducer from './entities'
import servicesReducer from './services'
import scenesReducer from './scenes/reducer'

const reducer = combineReducers({
  entities: entitiesReducer,
  services: servicesReducer,
  scenes: scenesReducer,

  form: formReducer,
  router: routerReducer
})

const clientMiddleware = store => next => action => {
  if (action.promise && action.types) {
    const [ REQUESTED, RESOLVED, REJECTED ] = action.types

    next({ ...action, type: REQUESTED })

    return action.promise.then(
      result => next({ ...action, type: RESOLVED }),
      error => next({ action, type: REJECTED })
    )
  } else {
    return next(action)
  }
}

export default history => createStore(reducer, demoState, applyMiddleware(
  thunkMiddleware.withExtraArgument({
    api: new Api(),
    push, schema
  }),
  loggerMiddleware,
  routerMiddleware(history),
  clientMiddleware
))
