import { shell } from 'electron';

/** Components **/
import Block from '../../../../../../components/Block';
import Button from '../../../../../../components/Button';
import Recipient from '../../../../../../components/Recipient';

function InvoiceStatus({ amount, currency, id, recipient, tx }) {
  return (
    <Block title={`Invoice: ${id}`}>
      <div className={styles.InvoiceStatusHeader}>
        <div className={styles.InvoiceStatusField}>
          <div className={styles.InvoiceStatusLabel}>
            To
          </div>

          <Recipient {...recipient} />
        </div>

        <div className={styles.InvoiceStatusField}>
          <div className={styles.InvoiceStatusLabel}>
            Sum
          </div>

          <div>
            {amount} {currency}
          </div>
        </div>
      </div>

      <div className={styles.InvoiceStatusContainer}>
        <div className={styles.InvoiceStatusLink}>
          <Button onClick={() => shell.openExternal(`https://kovan.etherscan.io/tx/${tx}`)}>
            Check on Etherscan
          </Button>
        </div>
      </div>
    </Block>
  );
}

const mapStateToProps = (state, { match }) => {
  const invoice = state.entities.invoices[match.params.invoiceId];

  return {
    ...invoice,
    recipient: state.entities.users[transfer.address]
  };
};

export default connect(mapStateToProps)(InvoiceStatus);
