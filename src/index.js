import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import Scenes from './scenes'
import reducer from './reducer'

ReactDOM.render(
  <AppContainer>
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
      <Scenes />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

module.hot && module.hot.accept('./scenes', () => {
  const NextScene = require('./scenes')

  ReactDOM.render(
    <AppContainer>
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <NextScene />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
})
