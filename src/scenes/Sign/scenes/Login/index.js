/** Actions **/
import { login } from './actions';

/** Components **/
import SignLoginForm from './components/Form';

const SignLogin = ({ handleSubmit }) => (
  <div className={styles.SignLogin}>
    <div className={styles.SignLoginTitle}>
      Login
    </div>

    <div className={styles.SignLoginBlock}>
      <div className={styles.SignLoginBlockTitle}>
        Enter password to your wallet
      </div>

      <div>
        {localStorage.getItem('address')}
      </div>
    </div>

    <SignLoginForm onSubmit={handleSubmit} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(login(values.password))
});

export default connect(null, mapDispatchToProps)(SignLogin);
