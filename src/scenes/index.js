/** Scenes **/
import Edit from './Edit';
import Invitation from './Invitation';
import Invoice from './Invoice';
import Search from './Search';
import Sign from './Sign';
import Topup from './Topup';
import Transaction from './Transaction';
import Transfer from './Transfer';
import User from './User';

function Scenes() {
  return (
    <Switch>
      <Route component={Edit} path="/edit" />
      <Route component={Invitation} path="/invitation" />
      <Route component={Invoice} path="/invoice" />
      <Route component={Search} path="/search" />
      <Route component={Topup} path="/topup" />
      <Route component={Transaction} path="/transaction/:tx" />
      <Route component={Transfer} path="/transfer" />
      <Route component={User} path="/user/:address" />
    </Switch>
  );
}

export default Scenes;
