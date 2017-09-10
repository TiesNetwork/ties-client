/** Components **/
import Block from '../../components/Block';
import Button from '../../components/Button';

/** Scenes **/
import Send from './scenes/Send';

function Transfer({ history, match }) {
  return (
    <div className={styles.Transfer}>
      {match.isExact && (
        <Block title="Select action">
          <Button
            className={styles.TransferAction}
            onClick={() => history.push(`${match.url}/send`)}
          >
            Make a Transfer
          </Button>

          <Button
            className={styles.TransferAction}
            onClick={() => history.push('/invoice')}
          >
            Issue a Invoice
          </Button>

          <Button className={styles.TransferAction} disabled>
            Contract
          </Button>
        </Block>
      )}

      <Route component={Send} path={`${match.url}/send`} />
    </div>
  );
}

export default Transfer;
