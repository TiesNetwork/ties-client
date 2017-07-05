import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Wallet from './Wallet'

class Scenes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/wallet">Wallet</Link>
          </div>

          <hr />

          <div>
            <Route component={Wallet} path="/wallet" />
          </div>
        </div>
      </Router>
    )
  }
}

export default Scenes
