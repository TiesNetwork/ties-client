import SignLoginForm from './components/Form'

class SignLogin extends React.Component {
  render() {
    return (
      <div className={styles.SignLogin}>
        <h1 className={styles.SignLoginTitle}>
          Login
        </h1>

        <div className={styles.SignLoginDescription}>
          Enter password to your wallet
        </div>

        <div className={styles.SignLoginAddress}>
          87ajw408ha0g456y3485asiedfalskje54932aJDKEFJ
        </div>

        <SignLoginForm />
      </div>
    )
  }
}

export default SignLogin
