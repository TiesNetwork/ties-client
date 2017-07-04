import { Link, Route } from 'react-router-dom'

import WalletCreate from './scenes/Create'
import WalletRecovery from './scenes/Recovery'
import WalletSecurity from './scenes/Security'

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/wallet/create">Create new wallet</Link>&nbsp;|&nbsp;
          <Link to="/wallet/recovery">Recovery wallet</Link>&nbsp;|&nbsp;
          <Link to="/wallet/security">Wallet security</Link>
        </div>

        <div>
          <Route component={WalletCreate} path="/wallet/create" />
          <Route component={WalletRecovery} path="/wallet/recovery" />
          <Route component={WalletSecurity} path="/wallet/security" />
        </div>
      </div>
    )
  }
}

export default Wallet
