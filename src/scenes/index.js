import { Link, Route } from 'react-router-dom'

import Sign from './Sign'

class Scenes extends React.Component {
  render() {
    return (
      <div>
        <div>

        </div>

        <div>
          <Route component={Sign} path="/"/>
        </div>
      </div>
    )
  }
}



export default Scenes
