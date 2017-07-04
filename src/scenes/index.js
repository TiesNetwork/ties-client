import { BrowserRouter as Router, Route } from 'react-router-dom'

import Wallet from './Wallet'

class Scenes extends React.Component {
  render() {
    return (
      <Router>
        <Route component={Wallet} path="/wallet" />
      </Router>
    )
  }
}

export default Scenes
