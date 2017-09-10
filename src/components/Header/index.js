/** Components **/
import Avatar from '../Avatar';
import Button from '../Button';
import Icon from '../Icon';

import Account from './components/Account';

function Header({ balance, history, user }) {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLogo}>
        <Icon
          className={styles.HeaderLogoIcon}
          type={Icon.TYPE.LOGO}
        />
      </div>

      {balance && (
        <div className={styles.HeaderBalance}>
          <Account amount={balance.TIE} currency="TIE" />
          <Account amount={balance.ETH} currency="ETH" />
        </div>
      )}

      <div className={styles.HeaderTopup}>
        <Button onClick={() => history.push('/topup')}>
          Topup
        </Button>
      </div>

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

const mapStateToProps = state => ({
  balance: state.entities.account.balance,
  user: state.entities.users[state.entities.account.id]
});

export default connect(mapStateToProps)(withRouter(Header));
