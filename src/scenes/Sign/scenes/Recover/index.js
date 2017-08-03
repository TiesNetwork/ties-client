import SignRecoverForm from './components/Form'

class SignRecover extends React.Component {
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

        <SignRecoverForm />
      </div>
    )
  }
}

export default SignRecover
