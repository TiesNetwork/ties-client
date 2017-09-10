import { withRouter } from 'react-router-dom'

/** Components **/
import Avatar from '../../../../components/Avatar';
import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';

import HeaderAccount from './components/Account';

const Header = ({ balance, history, user }) => (
  <div className={styles.Header}>
    <div className={styles.HeaderLogo}>
      <div className={styles.HeaderLogoImage} />
    </div>

    {balance && (
      <div className={styles.HeaderBalance}>
        <HeaderAccount
          amount={balance.TIE}
          currency="TIE"
        />

        <HeaderAccount
          amount={balance.ETH}
          currency="ETH"
        />

        <HeaderAccount
          amount={balance.Deposit}
          currency={<s title=" TIE Deposit. You spend it for database transactions.">TIE</s>}
        />
      </div>
    )}

    <div className={styles.HeaderTopup}>
      <Button onClick={() => history.push('/private/topup')}>
        Topup
      </Button>
    </div>

    <div className={styles.HeaderSearch}>
      <Button
        className={styles.HeaderSearchButton}
        color={Button.color.CUSTOM}
        onClick={() => history.push('/private/search/users')}
      >
        <Icon type={Icon.TYPE.SEARCH} />
      </Button>
    </div>

    {user && (
      <div className={styles.HeaderUser}>
        <Button
          className={styles.HeaderUserButton}
          color={Button.color.CUSTOM}
          onClick={() => history.push(`/private/user/${user.address}`)}
        >
          <Avatar
            className={styles.HeaderUserAvatar}
            src={user.photo}
          />
        </Button>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  balance: state.entities.account.balance,
  user: state.entities.users[state.entities.account.id]
});

export default connect(mapStateToProps)(withRouter(Header));
