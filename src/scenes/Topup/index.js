/** Actions **/
import { redeemInvitationCode } from './actions';

/** Components **/
import Block from '../../components/Block';
import Copy from '../../components/Copy';
import Form from './components/Form';

function Topup({ address, handleSubmit }) {
  return (
    <Block className={styles.Topup}>
      <div className={styles.TopupBlock}>
        <div className={styles.TopupTitle}>
          You can send ETH, TIE and other tokens to the following address using any Ethereum Wallet
        </div>

        <Copy value={address} />
      </div>

      <div className={styles.TopupBlock}>
        <div className={styles.TopupTitle}>
          You can enter your invitation code to popup your account for free
        </div>

        <Form onSubmit={handleSubmit}/>
      </div>
    </Block>
  );
}

const mapStateToProps = state => ({
  address: state.entities.account.address
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(redeemInvitationCode(values.code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Topup);
