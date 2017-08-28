import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

/** Scenes **/
import Scenes from './scenes';

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Scenes} path="/" />
    </Router>
  </Provider>
);

export default App;
