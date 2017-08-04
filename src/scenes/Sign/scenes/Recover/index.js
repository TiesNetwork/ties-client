import SignRecoverForm from './components/Form'

import { recover } from './actions'

class SignRecover extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  }

  render() {
    return (
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

        <SignRecoverForm onSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    handleSubmit: values => dispatch(recover(values.phrase, values.password))
  })
)(SignRecover)
