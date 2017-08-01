import SignRecoverForm from './components/Form'

class SignRecover extends React.Component {
  render() {
    return (
      <div className={styles.SignRecover}>
        <h1 className={styles.SignRecoverTitle}>
          Recover
        </h1>

        <div className={styles.SignRecoverDescription}>
          Recover access to your Ethereum wallet.<br />
          You can enter 12 words recovery phrase from Parity wallet or hex-encoded private key of your wallet
        </div>

        <SignRecoverForm />
      </div>
    )
  }
}

export default SignRecover
