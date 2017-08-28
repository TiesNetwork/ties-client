import { Redirect } from 'react-router-dom';

/** Components **/
import Button from '../../../../components/Button';

/** Scenes **/
import SignCreate from './scenes/Create';
import SignLogin from './scenes/Login';
import SignRecover from './scenes/Recover';
import SignRecovery from './scenes/Recovery';

const Sign = ({
  handleCreateClick, handleLoginClick, handleRecoverClick,
  history, location, match
}) => (
  <div className={styles.Sign}>
    {location.pathname == match.url && (
      <Redirect to={!!localStorage.getItem('token')
        ? `${match.url}/login`
        : `${match.url}/create`
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

      {location.pathname != `${match.url}/recovery` && (
        <div className={styles.SignAboutActions}>
          {location.pathname != `${match.url}/login` && (
            <Button
              className={styles.SignAboutAction}
              color={Button.COLOR.WHITE}
              onClick={() => history.push(`${match.url}/login`)}
            >
              Login
            </Button>
          )}

          {location.pathname != `${match.url}/recover` && (
            <Button
              className={styles.SignAboutAction}
              color={Button.COLOR.WHITE}
              onClick={() => history.push(`${match.url}/recover`)}
            >
              Recover
            </Button>
          )}

          {location.pathname != `${match.url}/create` && (
            <Button
              className={styles.SignAboutAction}
              color={Button.COLOR.WHITE}
              onClick={() => history.push(`${match.url}/create`)}
              solid={true}
            >
              Create New
            </Button>
          )}
        </div>
      )}
    </div>

    <div className={styles.SignContainer}>
      <Route component={SignCreate} path={`${match.url}/create`} />
      <Route component={SignLogin} path={`${match.url}/login`} />
      <Route component={SignRecover} path={`${match.url}/recover`} />
      <Route component={SignRecovery} path={`${match.url}/recovery`} />
    </div>
  </div>
);

export default Sign;
