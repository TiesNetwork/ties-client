import { Redirect } from 'react-router-dom';

/** Actions **/
import { addMessage, getBalance, getContacts, setOnline, updateBalance } from './actions';
import { prompt } from '../../services/modals';

/** Components **/
import Header from './components/Header';
import Prompt from './components/Prompt';

/** Containers **/
import Sidebar from './containers/Sidebar';

/** Scenes **/
import Edit from './scenes/Edit';
import Invitation from './scenes/Invitation';
import Messages from './scenes/Messages';
import Search from './scenes/Search';
import Topup from './scenes/Topup';
import Transfer from './scenes/Transfer';
import Users from './scenes/Users';

class Private extends Component {
  componentDidMount() {
    const {
      address, prompt,
      addMessage, getContacts, getBalance, setOnline, updateBalance
    } = this.props;

    getBalance();
    getContacts();

    Client.confirmCallback = description =>
      new Promise((resolve, reject) => prompt({
        description: description,
        input: {
          label: 'Password',
          type: 'password'
        },
        onSubmit: value => resolve(value),
        title: 'Confirm transaction'
      }));

    Client.BC.listenBalance(address, balance =>
      updateBalance({ ETH: balance.toNumber() / Math.pow(10, 18) })
    );

    Client.BC.listenDeposit(address, balance =>
      updateBalance({ Deposit: balance.toNumber() / Math.pow(10, 18) })
    );

    Client.BC.listenTransfer(address, balance =>
      updateBalance({ TIE: balance.toNumber() / Math.pow(10, 18) })
    );

    Chat.connectCallback = (address) => setOnline(address, true);
    Chat.disconnectCallback = (address) => setOnline(address, false);

    Chat.messageCallback = (from, message) => addMessage({
      address: from,
      date: new Date(),
      from: from,
      text: message.toString(),
    })
  }

  componentDidUpdate() {
    const { address, contacts } = this.props;
    // Chat.create(address, contacts);
  }

  render() {
    const { match } = this.props;

    return (
      <div className={styles.Private}>
        <Header />

        <div className={styles.PrivateContainer}>
          <div className={styles.PrivateContent}>
            <Switch>
              <Route component={Edit} path={`${match.url}/edit`} />
              <Route component={Invitation} path={`${match.url}/invitation`} />
              <Route component={Messages} path={`${match.url}/messages/:userAddress`} />
              <Route component={Search} path={`${match.url}/search`} />
              <Route component={Topup} path={`${match.url}/topup`} />
              <Route component={Transfer} path={`${match.url}/transfer`} />
              <Route component={Users} path={`${match.url}/users`} />
            </Switch>
          </div>
        </div>

        <Prompt />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  address: state.entities.account.address,
  contacts: state.entities.users[state.entities.account.address].contacts
});
const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  getBalance: () => dispatch(getBalance()),
  getContacts: () => dispatch(getContacts()),
  setOnline: (address, status) => dispatch(setOnline(address, status)),
  prompt: props => dispatch(prompt(props)),
  updateBalance: balance => dispatch(updateBalance(balance))
})

export default connect(mapStateToProps, mapDispatchToProps)(Private);
