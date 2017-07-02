import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Login'

class Scenes extends React.Component {
  render() {
    return (
      <Router>
        <Route component={Login} path="/login" />
      </Router>
    )
  }
}

export default Scenes
