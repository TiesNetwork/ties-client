import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Invoices from './scenes/invoices'
import Profile from './scenes/profile'
import Search from './scenes/search'
import User from './scenes/user'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div style={{ background: '#EFEFEF', padding: '16px'}}>
            <Link to="/invoices">Invoices</Link>&nbsp;|&nbsp;
            <Link to="/profile">Profile</Link>&nbsp;|&nbsp;
            <Link to="/search">Search</Link>&nbsp;|&nbsp;
            <Link to="/user">User</Link>
          </div>

          <div style={{ marginTop: '24px' }}>
            <Route component={Invoices} path="/invoices" />
            <Route component={Profile} path="/profile" />
            <Route component={Search} path="/search" />
            <Route component={User} path="/user" />
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
