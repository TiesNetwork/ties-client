/** Scenes **/
import UsersUser from './scenes/User';

const Users = ({ match }) => (
  <Switch>
    <Route component={UsersUser} path={`${match.url}/:userId`} />
  </Switch>
);

export default Users;
