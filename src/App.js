import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import Scenes from './scenes'

class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <Scenes />
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default App
