import createHistory from 'history/createHashHistory';

import App from './App';
import createStore from './store';

Client.setConfig({
  connection: {
    login: 'reader',
    password: 'reader',
    keyspace: 'ties',
    address: 'hosting.krawlly.com',
    port: 9042
  },
  tiesdb: {
    host: 'http://mock.db.ties.network/',
  },
  blockchain: {
    host: 'https://kovan.infura.io/biP9YQcNXTag7nvAELQJ'
  },
})

Client.connect()
  .then(() => {
    const history = createHistory()

    ReactDOM.render(
      <App
        history={createHistory()}
        store={createStore(history)}
      />,
      document.getElementById('app')
    )
  }).catch(error => alert(error));

