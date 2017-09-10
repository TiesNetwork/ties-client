import createHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

import App from './App';
import createStore from './store';

Client.setConfig({
  blockchain: {
    host: 'https://kovan.infura.io/biP9YQcNXTag7nvAELQJ'
  },
  chat: {
    host: 'https://mockdb.ties.network/'
  },
  connection: {
    login: 'reader',
    password: 'reader',
    keyspace: 'ties',
    address: 'hosting.krawlly.com',
    port: 9042
  },
  tiesdb: {
    host: 'https://mockdb.ties.network/',
  }
});

Client.connect()
  .then(() => {
    const history = createHistory();
    const store = createStore(history);

    ReactDOM.render((
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    ), document.getElementById('app'));
  }).catch(error => alert(error));

