/** Actions **/
import { getBalance, updateBalance } from './actions';
import { prompt } from '../../services/modals';

/** Components **/
import Header from './components/Header';
import Prompt from './components/Prompt';

/** Containers **/
import Sidebar from './containers/Sidebar';

/** Scenes **/
import Edit from './scenes/Edit';
import Invoice from './scenes/Invoice';
import Invitation from './scenes/Invitation';
import Search from './scenes/Search';
import Topup from './scenes/Topup';
import Transfer from './scenes/Transfer';
import Users from './scenes/Users';

class Private extends Component {
  componentDidMount() {
    const {
      address, prompt,
      getBalance, updateBalance
    } = this.props;

    getBalance();

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
  }

  render() {
    const { match } = this.props;

    return (
      <div className={styles.Private}>
        <Header />

        <div className={styles.PrivateContainer}>
          <Sidebar />

          <div className={styles.PrivateContent}>
            <Switch>
              <Route component={Edit} path={`${match.url}/edit`} />
              <Route component={Invitation} path={`${match.url}/invitation`} />
              <Route component={Invoice} path={`${match.url}/invoice`} />
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
  address: state.entities.account.address
});
const mapDispatchToProps = dispatch => ({
  getBalance: () => dispatch(getBalance()),
  prompt: props => dispatch(prompt(props)),
  updateBalance: balance => dispatch(updateBalance(balance))
})

export default connect(mapStateToProps, mapDispatchToProps)(Private);
