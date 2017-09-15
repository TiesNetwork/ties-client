import { remote } from 'electron';
import { goBack, push, replace, routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

import Api from './api'
import * as schema from './api/schema'

/** Middleware **/
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

/** Reducers **/
import containersReducer from './containers/reducer';
import entitiesReducer from './entities'
import servicesReducer from './services'
import scenesReducer from './scenes/reducer'

const reducer = combineReducers({
  containers: containersReducer,
  entities: entitiesReducer,
  services: servicesReducer,
  scenes: scenesReducer,

  form: formReducer,
  router: routerReducer
});

const clientMiddleware = store => next => action => {
  if (action.promise && action.types) {
    const [ REQUESTED, RESOLVED, REJECTED ] = action.types;

    next({ ...action, type: REQUESTED });

    return action.promise.then(
      result => next({ ...action, type: RESOLVED }),
      error => {
        console.error(error);

        const errorString = error.toString();

        errorString.toLowerCase().indexOf('user cancelled') == -1 &&
        remote.dialog.showErrorBox('', errorString.replace('Error: ', ''));

        next({ action, type: REJECTED });
      }
    );
  } else {
    return next(action);
  }
};

export default history => createStore(reducer, applyMiddleware(
  thunkMiddleware.withExtraArgument({
    api: new Api(),
    history: { goBack, push, replace },
    push, replace, schema
  }),
  loggerMiddleware,
  routerMiddleware(history),
  clientMiddleware
))
