import { push, routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

import Api from './api'
import * as schema from './api/schema'

/** Middleware **/
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

/** Reducers **/
import entitiesReducer from './entities'
import scenesReducer from './scenes/reducer'

const reducer = combineReducers({
  entities: entitiesReducer,
  scenes: scenesReducer,

  form: formReducer,
  router: routerReducer
})

const promiseMiddleware = store => next => action => {
  if (action.promise && action.types) {
    const [ REQUESTED, RESOLVED, REJECTED ] = action.types

    store.dispatch({ type: REQUESTED })

    action.promise.then(
      result => store.dispatch({ type: RESOLVED }),
      error => {
        console.error(error)
        store.dispatch({ type: REJECTED })
      }
    )
  }

  return next(action)
}

export default history => createStore(reducer, applyMiddleware(
  thunkMiddleware.withExtraArgument({
    api: new Api(),
    push, schema
  }),
  loggerMiddleware,
  routerMiddleware(history),
  promiseMiddleware
))
