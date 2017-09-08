// @todo - create external component
import { shell } from 'electron';

/** Components **/
import Block from '../../../../components/Block';
import Button from '../../../../components/Button';
import Recipient from '../../../../components/Recipient';

function Transaction({ currency, recipient, sum, tx }) {
  return (
    <Block title="Transaction">
      <div className={styles.TransactionHeader}>
        <div className={styles.TransactionField}>
          <div className={styles.TransactionFieldLabel}>
            To
          </div>

          <Recipient {...recipient} />
        </div>

        <div className={styles.TransactionField}>
          <div className={styles.TransactionFieldLabel}>
            Sum
          </div>

          <div className={styles.TransactionFieldValue}>
            {sum} {currency}
          </div>
        </div>
      </div>

      <div className={styles.TransactionContainer}>
        <Button onClick={() => shell.openExternal(`https://kovan.etherscan.io/tx/${tx}`)}>
          Check on Etherscan
        </Button>
      </div>
    </Block>
  );
}

const mapStateToProps = (state, { match }) => {
  const transaction = state.entities.transactions[match.params.tx];

  return {
    ...transaction,
    recipient: state.entities.users[transaction.address]
  };
}

export default connect(mapStateToProps)(Transaction);
