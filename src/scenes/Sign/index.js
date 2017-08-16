import { Redirect } from 'react-router-dom'

/** Components **/
import Button from '../../components/Button'

/** Scenes **/
import SignCreate from './scenes/Create'
import SignLogin from './scenes/Login'
import SignRecover from './scenes/Recover'
import SignRecovery from './scenes/Recovery'

class Sign extends React.Component {
  handleCreateClick = () => this.props.history.push('/sign/create')
  handleLoginClick = () => this.props.history.push('/sign/login')
  handleRecoverClick = () => this.props.history.push('/sign/recover')

  render() {
    return (
      <div className={styles.Sign}>
        {this.props.location.pathname == '/sign' && (
          <Redirect to={!!localStorage.getItem('token')
            ? '/sign/login'
            : '/sign/create'
          }/>
        )}

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

          {this.props.location.pathname != '/sign/recovery' && (
            <div className={styles.SignAboutActions}>
              {this.props.location.pathname != '/sign/login' && (
                <Button
                  className={styles.SignAboutAction}
                  color={Button.color.WHITE}
                  onClick={this.handleLoginClick}
                >
                  Login
                </Button>
              )}

              {this.props.location.pathname != '/sign/recover' && (
                <Button
                  className={styles.SignAboutAction}
                  color={Button.color.WHITE}
                  onClick={this.handleRecoverClick}
                >
                  Recover
                </Button>
              )}

              {this.props.location.pathname != '/sign/create' && (
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
          <Route component={SignCreate} path="/sign/create" />
          <Route component={SignLogin} path="/sign/login" />
          <Route component={SignRecover} path="/sign/recover" />
          <Route component={SignRecovery} path="/sign/recovery" />
        </div>
      </div>
    )
  }
}

export default Sign
