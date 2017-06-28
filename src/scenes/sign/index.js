import { Route } from 'react-router-dom'

import SignUp from './scenes/up'

class Sign extends React.Component {
  render() {
    return (
      <div className="Sign">
        <Route component={SignUp} path="/sign/up" />
      </div>
    )
  }
}

export default Sign
