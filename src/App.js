/** Containers **/
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';

/** Scenes **/
import Scenes from './scenes';
import Sign from './scenes/Sign';

function App({ isAuthenticated }) {
  return (
    <div className={styles.App}>
      {isAuthenticated && <Header />}

      <div className={styles.AppContainer}>
        {isAuthenticated && <Sidebar />}

        <div className={styles.AppContent}>
          <Switch>
            <Route component={Sign} path="/sign" />
            <Route path="/" render={props => (
              isAuthenticated
                ? <Scenes {...props} />
                : <Redirect to="/sign" />
            )}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.entities.account.address
});

export default connect(mapStateToProps, null, null, { pure: false })(App);
