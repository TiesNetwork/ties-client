import { Link, Route } from 'react-router-dom'

import Login from './Login'
import Search from './Search'
import Profile from './Profile'
import Wallet from './Wallet'

class Scenes extends React.Component {
  render() {
    return (
      <div>
        <div>
          Wallet phrase: crunchy protozoan magazine punctured unicycle overrate antacid jokester salami platypus fracture mute
        </div>

        <hr />

        <div>
          <Link to="/Login">Login</Link>&nbsp;|&nbsp;
          <Link to="/Profile">Profile</Link>&nbsp;|&nbsp;
          <Link to="/Search">Search</Link>&nbsp;|&nbsp;
          <Link to="/wallet">Wallet</Link>
        </div>

        <hr />

        <div>
          <Route component={Login} path="/login" />
          <Route component={Profile} path="/profile" />
          <Route component={Search} path="/search" />
          <Route component={Wallet} path="/wallet" />
        </div>
      </div>
    )
  }
}



export default Scenes
