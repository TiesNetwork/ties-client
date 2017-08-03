/** Components **/
import Button from '../../components/Button'

/** Scenes **/
import SignCreate from './scenes/Create'
import SignLogin from './scenes/Login'
import SignRecover from './scenes/Recover'
import SignRecovery from './scenes/Recovery'

class Sign extends React.Component {
  handleCreateClick = () => this.props.history.push(ROUTES.SIGN.CREATE.path)
  handleLoginClick = () => this.props.history.push(ROUTES.SIGN.LOGIN.path)
  handleRecoverClick = () => this.props.history.push(ROUTES.SIGN.RECOVER.path)

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

          <div className={styles.SignAboutTitle}>
            Social business-platform for&nbsp;cryptocommunity
          </div>

          <div className={styles.SignAboutItems}>
            <div className={styles.SignAboutItem}>Partners search</div>
            <div className={styles.SignAboutItem}>Paying in crypto</div>
            <div className={styles.SignAboutItem}>ICO Due Dilligence</div>
          </div>

          {this.props.location.pathname != ROUTES.SIGN.RECOVERY.path && (
            <div className={styles.SignAboutActions}>
              {this.props.location.pathname != ROUTES.SIGN.LOGIN.path && (
                <Button
                  className={styles.SignAboutAction}
                  color={Button.color.WHITE}
                  onClick={this.handleLoginClick}
                >
                  Login
                </Button>
              )}

              {this.props.location.pathname != ROUTES.SIGN.RECOVER.path && (
                <Button
                  className={styles.SignAboutAction}
                  color={Button.color.WHITE}
                  onClick={this.handleRecoverClick}
                >
                  Recover
                </Button>
              )}

              {this.props.location.pathname != ROUTES.SIGN.CREATE.path && (
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
          )}
        </div>

        <div className={styles.SignContainer}>
          <Route component={SignCreate} path={ROUTES.SIGN.CREATE.path} />
          <Route component={SignLogin} path={ROUTES.SIGN.LOGIN.path} />
          <Route component={SignRecover} path={ROUTES.SIGN.RECOVER.path} />
          <Route component={SignRecovery} path={ROUTES.SIGN.RECOVERY.path} />
        </div>
      </div>
    )
  }
}

export default Sign
