/** Scenes **/
import Edit from './scenes/Edit';
import Search from './scenes/Search';
import Transfer from './scenes/Transfer';
import Users from './scenes/Users';

const Private = ({ match }) => (
  <div>
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

export default Private;
