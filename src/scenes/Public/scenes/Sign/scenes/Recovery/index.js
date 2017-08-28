/** Components **/
import Button from '../../../../../../components/Button';

const SignRecovery = ({ handleContinueClick, wallet }) => (
  <div>
    <div className={styles.SignRecoveryTitle}>
      Recovery Information
    </div>

    {wallet && (
      <div>
        {wallet.address && (
          <div className={styles.SignRecoveryBlock}>
            <div className={styles.SignRecoveryBlockTitle}>
              Your wallet address / Ties.Network login
            </div>

            <Button>
              {wallet.address}
            </Button>
          </div>
        )}

        {wallet.phrase && (
          <div className={styles.SignRecoveryBlock}>
            <div className={styles.SignRecoveryBlockTitle}>
              Wallet recovery phrase <i>(12 words)</i>
            </div>

            <div className={styles.SignRecoveryPhrase}>
              {wallet.phrase.split(' ').map((word, index) => (
                <div
                  className={styles.SignRecoveryPhraseWord}
                  key={index}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )}

    <div className={styles.SignRecoveryBlock}>
      <strong>Attention!</strong> Keep your phrase safe!
      Its lose will result in lose of access to your account and lose of money
    </div>

    <div className={styles.SignRecoveryActions}>
      <Button onClick={handleContinueClick} solid>
        Continue
      </Button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  wallet: state.entities.wallets[state.services.session.userId]
});
const mapDispatchToProps = (dispatch, { history, match }) => ({
  handleContinueClick: history.push(`/private/edit/personal`)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignRecovery)
