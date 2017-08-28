/** Scenes **/
import UsersShow from './scenes/Show';

const Users = ({ match }) => (
  <Switch>
    123
    <Route component={UsersShow} path={`${match.url}/:userId`} />
  </Switch>
);

export default Users;
