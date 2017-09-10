/** Components **/
import Header from './components/Header';

/** Scenes **/
import Scenes from './scenes';

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.AppContainer}>
        <div className={styles.AppContent}>
          <Route component={Scenes} path="/" />
        </div>
      </div>
    </div>
  );
}

// const Scenes = ({ location, match, isAuthenticated }) => location.pathname == match.url ? (
//   <Redirect to="/private" />
// ) : (
//   <Switch>
//     <Route component={Public} path="/sign" />
//     <Route path="/" render={props => (
//       isAuthenticated
//         ? <Private {...props} />
//         : <Redirect to="/public/sign" />
//     )}/>
//   </Switch>
// );


export default App;
