import { shell } from 'electron';

/** Components **/
import Avatar from '../../../../../../../components/Avatar';
import Button from '../../../../../../../components/Button';

function SidebarInvoicesItem({
  address,
  amount,
  comment,
  currency,
  date,
  id,
  isIncoming,
  history,
  transaction,
  user
}) {
  return (
    <div className={styles.SidebarInvoicesItem}>
      <div className={styles.SidebarInvoicesItemHeader}>
        <div className={styles.SidebarInvoicesItemDirection}>
          {isIncoming ? 'from' : 'to'}
        </div>

        <div className={styles.SidebarInvoicesItemAmount}>
          {amount}

          <span className={styles.SidebarInvoicesItemCurrency}>
            {currency}
          </span>
        </div>
      </div>

      <div className={styles.SidebarInvoicesItemUser}>
        <Avatar
          className={styles.SidebarInvoicesItemUserAvatar}
          src={user.photo}
        />

        <div className={styles.SidebarInvoicesItemUserInfo}>
          <div className={styles.SidebarInvoicesItemUserName}>
            {user.name} {user.surname}
          </div>

          <div className={styles.SidebarInvoicesItemDate}>
            {moment(date).format('DD.MM.YYYY')}
          </div>
        </div>

      </div>

      <div className={styles.SidebarInvoicesItemComment}>
        {comment}
      </div>

      <div className={styles.SidebarInvoicesItemActions}>
        {isIncoming && !transaction && (
          <Button
            onClick={() => history.push({
              pathname: `/private/transfer/send`,
              query: { invoice: id }
            })}
          >
            Pay
          </Button>
        )}

        {transaction && (
          <Button onClick={() => shell.openExternal(`https://kovan.etherscan.io/tx/${transaction}`)}>
            Check on Etherscan
          </Button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state, { address, recipient }) => {
  const isIncoming = recipient == state.entities.account.address;

  return {
    isIncoming,
    user: state.entities.users[isIncoming ? address : recipient]
  };
};

export default connect(mapStateToProps)(withRouter(SidebarInvoicesItem));
