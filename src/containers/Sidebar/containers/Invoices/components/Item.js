/** Components **/
import Button from '../../../../../components/Button';

/** Containers **/
import User from '../../../../../containers/User';

function SidebarInvoicesItem({
  address, comment, currency, date,
  id, isIncoming, history, number, sum,
  transaction
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
        <User address={address} company={moment(date).format('DD.MM.YYYY')} position={null} />
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
    address: isIncoming ? address : recipient,
    isIncoming
  };
};

export default withRouter(connect(mapStateToProps)(SidebarInvoicesItem));
