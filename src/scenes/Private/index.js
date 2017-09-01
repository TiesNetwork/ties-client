/** Actions **/
import { getBalance } from './actions';
import { prompt } from '../../services/modals';

/** Components **/
import Header from './components/Header';
import Prompt from './components/Prompt';

/** Scenes **/
import Edit from './scenes/Edit';
import Invitation from './scenes/Invitation';
import Search from './scenes/Search';
import Topup from './scenes/Topup';
import Transfer from './scenes/Transfer';
import Users from './scenes/Users';

class Private extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getBalance());

    Client.confirmCallback = description => new Promise((resolve, reject) => dispatch(
      prompt({
        description: description,
        input: {
          label: 'Password',
          type: 'password'
        },
        onSubmit: value => resolve(value),
        title: 'Confirm transaction'
      }))
    );
  }

  render() {
    const { match } = this.props;

    return (
      <div className={styles.Private}>
        <Header />

        <div>
          <Switch>
            <Route component={Edit} path={`${match.url}/edit`} />
            <Route component={Invitation} path={`${match.url}/invitation`} />
            <Route component={Search} path={`${match.url}/search`} />
            <Route component={Topup} path={`${match.url}/topup`} />
            <Route component={Transfer} path={`${match.url}/transfer`} />
            <Route component={Users} path={`${match.url}/users`} />
          </Switch>
        </div>

        <Prompt />
      </div>
    );
  }
}

export default connect()(Private);
