import Button from '../../../../components/Button'

const phrase = 'remnant punisher sarcasm chapped epidemic deviation oxidize glaring pantry paltry raving hesitancy'

class SignRecovery extends Component {
  handleAddressClick = () => alert('Copy to clipboard')

  render() {
    return (
      <div>
        <div className={styles.SignRecoveryTitle}>
          Recovery Information
        </div>

        <div className={styles.SignRecoveryBlock}>
          <div className={styles.SignRecoveryBlockTitle}>
            Your wallet address / Ties.Network login
          </div>

          <Button onClick={this.handleAddressClick}>
            87ajw408ha0g456y3485asiedfalskje54932aJDKEFJ
          </Button>
        </div>

        <div className={styles.SignRecoveryBlock}>
          <div className={styles.SignRecoveryBlockTitle}>
            Wallet recovery phrase <i>(12 words)</i>
          </div>

          <div className={styles.SignRecoveryPhrase}>
            {phrase.split(' ').map(word => (
              <div className={styles.SignRecoveryPhraseWord}>
                {word}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.SignRecoveryBlock}>
          <strong>Attention!</strong> Keep your phrase safe!
          Its lose will result in lose of access to your account and lose of money
        </div>

        <div className={styles.SignRecoveryActions}>
          <Button solid>
            Continue
          </Button>
        </div>
      </div>
    )
  }
}

export default SignRecovery
