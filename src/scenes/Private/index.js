/** Actions **/
import { getBalance } from './actions';

/** Components **/
import Header from './components/Header';

/** Scenes **/
import Edit from './scenes/Edit';
import Search from './scenes/Search';
import Transfer from './scenes/Transfer';
import Users from './scenes/Users';

class Private extends Component {
  componentDidMount() {
    const { getBalance } = this.props;

    getBalance();
  }

  render() {
    const { match } = this.props;

    return (
      <div className={styles.Private}>
        <Header />

        <div>
          <Switch>
            <Route component={Edit} path={`${match.url}/edit`} />
            <Route component={Search} path={`${match.url}/search`} />
            <Route component={Transfer} path={`${match.url}/transfer`} />
            <Route component={Users} path={`${match.url}/users`} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getBalance: () => dispatch(getBalance())
});

export default connect(null, mapDispatchToProps)(Private);
