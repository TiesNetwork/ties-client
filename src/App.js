import { Provider } from 'react-redux'
import { Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'

/** Actions **/
import { prompt } from './services/modals'

/** Scenes **/
import Modals from './scenes/Modals'
import Sign from './scenes/Sign'
import Scenes from './scenes'

class App extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  componentDidMount() {
    Client.confirmCallback = description => new Promise((resolve, reject) =>
      this.props.dispatch(prompt({
        description: description,
        input: { label: 'Password', type: 'password' },
        onSubmit: value => resolve(value),
        title: 'Confirm transaction'
      }))
    )
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <div className={styles.App}>
            <Switch>
              <Route component={Sign} path="/sign" />
              <Route path="/" render={props => (
                this.props.isAuthenticated
                  ? <Scenes {...props} />
                  : <Redirect to="/sign" />
              )}/>
            </Switch>

            <Modals />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default connect(state => ({
  isAuthenticated: !!state.services.session.userId
}))(App)
