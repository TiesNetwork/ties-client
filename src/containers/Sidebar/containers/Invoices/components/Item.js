/** Components **/
import Button from '../../../../../components/Button';

/** Containers **/
import Personal from '../../../../../containers/Personal';

function SidebarInvoicesItem({
  comment, currency, date,
  id, isIncoming, history, number, sum,
  transaction, user
}) {
  return (
    <div className={styles.SidebarInvoicesItem}>
      <div className={styles.SidebarInvoicesItemHeader}>
        <div className={styles.SidebarInvoicesItemNumber}>
          #{number}

          <span className={styles.SidebarInvoicesItemDirection}>
            {isIncoming ? 'from' : 'to'}
          </span>
        </div>

        <div className={styles.SidebarInvoicesItemSum}>
          {sum}

          <span className={styles.SidebarInvoicesItemCurrency}>
            {currency}
          </span>
        </div>
      </div>

      <div className={styles.SidebarInvoicesItemUser}>
        <Personal
          address={user.address}
          company={moment(date).format('DD.MM.YYYY')}
          densed
          name={user.name}
          surname={user.surname}
          photo={user.photo}
        />
      </div>

      <div className={styles.SidebarInvoicesItemComment}>
        {comment}
      </div>

      <div className={styles.SidebarInvoicesItemActions}>
        {isIncoming && !transaction && (
          <Button
            onClick={() => history.push({
              pathname: '/transfer/send',
              query: { invoice: id }
            })}
          >
            Pay
          </Button>
        )}

        {transaction && (
          <Button onClick={() => history.push(`/transaction/${transaction}`)}>
            View Transaction
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

export default withRouter(connect(mapStateToProps)(SidebarInvoicesItem));
