/** Actions **/
import { create } from './actions';

/** Components **/
import SignCreateForm from './components/Form';

const SignCreate = ({ handleSubmit }) => (
  <div className={styles.SignCreate}>
    <div className={styles.SignCreateTitle}>
      Creation of new TIE wallet
    </div>

    <div className={styles.SignCreateBlock}>
      <div className={styles.SignCreateBlockTitle}>
        Public and private key will be generated automatically<br />
        Your wallet will be a valid Ethereum account
      </div>
    </div>

    <div className={styles.SignCreateBlock}>
      Enter password to access your wallet later<br />
      Please use strong password <i>(min 8 characters)</i>
    </div>

    <SignCreateForm onSubmit={handleSubmit}/>
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(create(values.password))
});

export default connect(null, mapDispatchToProps)(SignCreate);
