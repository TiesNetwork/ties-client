/** Actions **/
import { fetchBalance, updateBalance } from './actions';

/** Components **/
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

import Account from './components/Account';

class Header extends Component {
  componentDidMount() {
    const { address, fetchBalance, updateBalance } = this.props;

    fetchBalance();

    Client.BC.listenBalance(address, balance =>
      updateBalance({ ETH: balance.toNumber() / Math.pow(10, 18) })
    );

    Client.BC.listenTransfer(address, balance =>
      updateBalance({ TIE: balance.toNumber() / Math.pow(10, 18) })
    );
  }

  render() {
    const { balance, history, user } = this.props;

    return (
      <div className={styles.Header}>
        <div className={styles.HeaderLogo}>
          <Button
            className={styles.HeaderLogoButton}
            color={Button.COLOR.CUSTOM}
            onClick={() => history.push(`/user/${user.address}`)}
          >
            <Icon
              className={styles.HeaderLogoIcon}
              type={Icon.TYPE.LOGO}
            />
          </Button>
        </div>

        {balance && (
          <div className={styles.HeaderBalance}>
            <Account amount={balance.TIE} currency="TIE" />
            <Account amount={balance.ETH} currency="ETH" />
          </div>
        )}

        {balance && (
          <div className={styles.HeaderTopup}>
            <Button onClick={() => history.push('/topup')}>
              Topup
            </Button>
          </div>
        )}

        <div className={styles.HeaderSearch}>
          <Button
            className={styles.HeaderSearchButton}
            color={Button.color.CUSTOM}
            onClick={() => history.push('/search/users')}
          >
            <Icon type={Icon.TYPE.SEARCH}/>
          </Button>
        </div>

        {user && (
          <div className={styles.HeaderUser}>
            <Button
              className={styles.HeaderUserButton}
              color={Button.color.CUSTOM}
              onClick={() => history.push(`/user/${user.address}`)}
            >
              <Avatar className={styles.HeaderUserAvatar} src={user.photo} />
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  address: state.entities.account.address,
  balance: state.entities.account.balance,
  user: state.entities.users[state.entities.account.address]
});
const mapDispatchToProps = dispatch => ({
  fetchBalance: () => dispatch(fetchBalance()),
  updateBalance: balance => dispatch(updateBalance(balance))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
