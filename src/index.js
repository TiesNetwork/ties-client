import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import Scenes from './scenes'
import reducer from './reducer'

ReactDOM.render(
  <Provider store={createStore(reducer, applyMiddleware(thunk))}>
    <Scenes />
  </Provider>,
  document.getElementById('app')
)
