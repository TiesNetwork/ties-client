import { Link, Redirect, Route } from 'react-router-dom'

import Sign from './Sign'

class Scenes extends React.Component {
  render() {
    return (
      <div>
        <Redirect to={ROUTES.SIGN.LOGIN.path}/>
        <div>

        </div>

        <div>
          <Route component={Sign} path={ROUTES.SIGN.path}/>
        </div>
      </div>
    )
  }
}



export default Scenes
