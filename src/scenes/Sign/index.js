/** Components **/
import Button from '../../components/Button'

/** Scenes **/
import SignCreate from './scenes/Create'
import SignLogin from './scenes/Login'
import SignRecover from './scenes/Recover'

class Sign extends React.Component {
  handleCreateClick = () => this.props.history.push(ROUTES.SIGN.CREATE)
  handleLoginClick = () => this.props.history.push(ROUTES.SIGN.LOGIN)
  handleRecoverClick = () => this.props.history.push(ROUTES.SIGN.RECOVER)

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
            {this.props.location.pathname != ROUTES.SIGN.LOGIN && (
              <Button
                className={styles.SignAboutAction}
                color={Button.color.WHITE}
                onClick={this.handleLoginClick}
              >
                Login
              </Button>
            )}

            {this.props.location.pathname != ROUTES.SIGN.RECOVER && (
              <Button
                className={styles.SignAboutAction}
                color={Button.color.WHITE}
                onClick={this.handleRecoverClick}
              >
                Recover
              </Button>
            )}

            {this.props.location.pathname != ROUTES.SIGN.CREATE && (
              <Button
                className={styles.SignAboutAction}
                color={Button.color.WHITE}
                onClick={this.handleCreateClick}
                solid={true}
              >
                Create New
              </Button>
            )}
          </div>
        </div>

        <div className={styles.SignContainer}>
          <Route component={SignCreate} path={ROUTES.SIGN.CREATE} />
          <Route component={SignLogin} path={ROUTES.SIGN.LOGIN} />
          <Route component={SignRecover} path={ROUTES.SIGN.RECOVER} />
        </div>
      </div>
    )
  }
}

export default Sign
