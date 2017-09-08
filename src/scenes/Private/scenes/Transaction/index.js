/** Components **/
import Block from '../../../../components/Block';

function Transaction({ amount, recipient, tx }) {
  return (
    <Block title="Transaction">
      <div className={styles.TransactionHeader}>

      </div>

      <div className={styles.TransactionContainer}>

      </div>
    </Block>
  );
}

const mapStateToProps = (state, { tx }) => state.entities.transactions[tx];

export default connect(mapStateToProps)(Transaction);
