/** Components **/
import Button from '../../components/Button'

/** Scenes **/
import SignLogin from './scenes/Login'

class Sign extends React.Component {
  render() {
    return (
      <div className={styles.Sign}>
        <div className={styles.SignAbout}>
          <div className={styles.SignAboutLogo}>
            <div className={styles.SignAboutLogoImage} />

            <div className={styles.SignAboutLogoTitle}>
              Ties.Network
            </div>
          </div>

          <h1 className={styles.SignAboutTitle}>
            Social business-platform for&nbsp;cryptocommunity
          </h1>

          <div className={styles.SignAboutItems}>
            <div className={styles.SignAboutItem}>Partners search</div>
            <div className={styles.SignAboutItem}>Paying in crypto</div>
            <div className={styles.SignAboutItem}>ICO Due Dilligence</div>
          </div>

          <div className={styles.SignAboutActions}>
            <Button
              className={styles.SignAboutAction}
              color={Button.color.WHITE}
            >
              Recover
            </Button>

            <Button
              className={styles.SignAboutAction}
              color={Button.color.WHITE}
              solid={true}
            >
              Create New
            </Button>
          </div>
        </div>

        <div className={styles.SignContainer}>
          <Route component={SignLogin} path="/" exact />
        </div>
      </div>
    )
  }
}

export default Sign
