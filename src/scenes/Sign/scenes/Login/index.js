import SignLoginForm from './components/Form'

import { login } from './actions'

class SignLogin extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  }

  render() {
    return (
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

        <SignLoginForm onSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}

export default connect(null,
  dispatch => ({
    handleSubmit: values => dispatch(login(values.password))
  })
)(SignLogin)
