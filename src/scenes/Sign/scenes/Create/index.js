import SignCreateForm from './components/Form'

class SignCreate extends React.Component {
  render() {
    return (
      <div className={styles.SignCreate}>
        <h1 className={styles.SignCreateTitle}>
          Creation of new TIE wallet
        </h1>

        <div className={styles.SignCreateDescription}>
          Public and private key will be generated automatically<br />
          Your wallet will be a valid Ethereum account
        </div>

        <SignCreateForm />
      </div>
    )
  }
}

export default SignCreate
