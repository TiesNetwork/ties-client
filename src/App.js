import { Provider } from 'react-redux'
import { Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'

import Sign from './scenes/Sign'
import Scenes from './scenes'
import createStore from './store'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(this.props.history)}>
        <Router history={this.props.history}>
          <Switch>
            <Route component={Sign} path="/sign" />
            <PrivateRoute component={Scenes} path="/" />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

class PrivateRoute extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  render() {
    const { component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={props => (
        this.props.isAuthenticated
          ? <Component {...props} />
          : <Redirect to="/sign" />
      )}/>
    )
  }
}

PrivateRoute = connect(state => ({
  isAuthenticated: !!state.services.session.userId
}))(PrivateRoute)

export default App
