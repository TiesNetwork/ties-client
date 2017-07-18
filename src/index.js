import createHistory from 'history/createHashHistory'

import { push, routerMiddleware } from 'react-router-redux'
import { applyMiddleware, createStore } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import App from './App'
import reducer from './reducer'

const history = createHistory()
    , store = createStore(reducer, applyMiddleware(
        thunkMiddleware.withExtraArgument({ push }), loggerMiddleware, routerMiddleware(history)))

ReactDOM.render(<App history={history} store={store} />, document.getElementById('app'))
