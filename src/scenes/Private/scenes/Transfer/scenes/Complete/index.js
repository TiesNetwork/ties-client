import { shell } from 'electron';

/** Components **/
import Block from '../../../../../../components/Block';
import Button from '../../../../../../components/Button';
import Recipient from '../../../../../../components/Recipient';

const TransferComplete = ({ recipient, tx, sum }) => (
  <Block title="Transfer is Complete">
    <div className={styles.TransferCompleteHeader}>
      <div className={styles.TransferCompleteField}>
        <div className={styles.TransferCompleteLabel}>
          To
        </div>

        <Recipient {...recipient} />
      </div>

      <div className={styles.TransferCompleteField}>
        <div className={styles.TransferCompleteLabel}>
          Sum
        </div>

        <div>
          {sum} TIE
        </div>
      </div>
    </div>

    <div className={styles.TransferCompleteContainer}>
      <div className={styles.TransferCompleteLink}>
        <Button onClick={() => shell.openExternal(`https://kovan.etherscan.io/tx/${tx}`)}>
          Check on Etherscan
        </Button>
      </div>
    </div>
  </Block>
);

const mapStateToProps = (state, { match }) => {
  const transfer = state.entities.account.transfers[match.params.transferAddress];

  return {
    ...transfer,
    recipient: state.entities.users[transfer.address]
  };
};

export default connect(mapStateToProps)(TransferComplete);
