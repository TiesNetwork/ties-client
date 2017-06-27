import { BrowserRouter as Router, Route } from 'react-router-dom'

import Search from './search'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="AppContainer">
            <Route component={Search} path="/search" />
          </div>
        </div>
      </Router>
    )
  }
}
