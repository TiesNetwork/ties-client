import { Link, Redirect, Route } from 'react-router-dom'

/** Scenes **/
import Edit from './Edit'
import Header from './Header'
import Sidebar from './Sidebar'
// import Sign from './Sign'
import User from './User'

// @todo - Redo the placement of the App container
class Scenes extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />

        <div className={styles.AppBody}>
          <Sidebar />

          <div className={styles.AppContainer}>
            <Route component={Edit} path="/edit" />
            <Route component={User} path="/user" />
          </div>
        </div>
      </div>
    )
  }
}



export default Scenes
