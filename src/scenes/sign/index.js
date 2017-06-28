import { Route } from 'react-router-dom'

import SignIn from './scenes/in'
import SignUp from './scenes/up'

class Sign extends React.Component {
  render() {
    return (
      <div className="Sign">
        <Route component={SignIn} path="/sign/in" />
        <Route component={SignUp} path="/sign/up" />
      </div>
    )
  }
}

export default Sign
