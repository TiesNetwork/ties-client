/** Actions **/
import { recover } from './actions';

/** Components **/
import SignRecoverForm from './components/Form';

const SignRecover = ({ handleSubmit }) => (
  <div>
    <div className={styles.SignRecoverTitle}>
      Recover
    </div>

    <div className={styles.SignRecoverBlock}>
      <div className={styles.SignRecoverBlockTitle}>
        Recover access to your Ethereum wallet.<br />
        You can enter 12 words recovery phrase from Parity wallet or hex-encoded private key of your wallet
      </div>

    </div>

    <SignRecoverForm onSubmit={handleSubmit} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(recover(values.phrase, values.password))
});

export default connect(null, mapDispatchToProps)(SignRecover);
