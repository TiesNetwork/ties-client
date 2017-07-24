import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import Scenes from './scenes'
import createStore from './store'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(this.props.history)}>
        <Router history={this.props.history}>
          <Scenes />
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App
