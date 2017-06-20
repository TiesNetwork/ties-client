import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SignIn from './auth/sign_in'
import SignOut from './auth/sign_out'
import SignUp from './auth/sign_up'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <h1>Ties.Network</h1>

          <div className="app__container">
            <Route component={SignIn} path="/signin" />
            <Route component={SignOut} path="/signout" />
            <Route component={SignUp} path="/signup" />
          </div>
        </div>
      </Router>
    )
  }
}
