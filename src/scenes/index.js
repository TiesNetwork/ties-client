/** Scenes **/
import Edit from './Edit';
import Header from './Header';
import Search from './Search';
import Sidebar from './Sidebar';
import Transfer from './Transfer';
import User from './User';

class Scenes extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />

        <div className={styles.AppBody}>
          <Sidebar />

          <div className={styles.AppContainer}>
            <Route component={Edit} path="/edit" />
            <Route component={Search} path="/search" />
            <Route component={Transfer} path="/transfer" />
            <Route component={User} path="/users/:userId" />
          </div>
        </div>
      </div>
    )
  }
}

export default Scenes;
