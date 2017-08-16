import { Redirect, Switch } from 'react-router-dom'

/** Scenes **/
import Edit from './Edit'
import Header from './Header'
import Search from './Search'
import Sidebar from './Sidebar'
import Sign from './Sign'
import User from './User'

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

class Scenes extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />

        <div className={styles.AppBody}>
          <Sidebar />

          <div className={styles.AppContainer}>
            <Switch>
              <Route component={Sign} path="/sign" />

              <PrivateRoute component={Edit} path="/edit" />
              <PrivateRoute component={Search} path="/search" />
              <PrivateRoute component={User} path="/users/:userId" />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default Scenes
