import SignLoginForm from './components/Form'

class SignLogin extends React.Component {
  render() {
    return (
      <div className={styles.SignLogin}>
        <div className={styles.SignLoginTitle}>
          Login
        </div>

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
