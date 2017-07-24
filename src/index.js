import createHistory from 'history/createHashHistory'
import App from './App'

Client.setConfig({
  connection: {
    login: 'reader',
    password: 'reader',
    keyspace: 'ties',
    address: 'hosting.krawlly.com',
    port: 9042
  },
  tiesdb: {
    host: 'http://mock.db.ties.network/db/',
  },
  blockchain: {
    host: 'https://kovan.infura.io/biP9YQcNXTag7nvAELQJ'
  },
})

Client.connect()
  .then(() => {
    ReactDOM.render(<App history={createHistory()} />, document.getElementById('app'))
  }).catch(error => {
  alert(error)
});


