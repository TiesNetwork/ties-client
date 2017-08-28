/** Scenes **/
import Edit from './scenes/Edit';
import Search from './scenes/Search';
import Transfer from './scenes/Transfer';
import User from './scenes/User';

const Private = ({ match }) => (
  <div>
    <div>
      <div>
        <Route component={Edit} path={`${match.url}/edit`} />
        <Route component={Search} path={`${match.url}/search`} />
        <Route component={Transfer} path={`${match.url}/transfer`} />
        <Route component={User} path={`${match.url}/users/:userId`} />
      </div>
    </div>
  </div>
);

export default Private;
