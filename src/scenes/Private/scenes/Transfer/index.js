/** Scenes **/
import TransferComplete from './scenes/Complete';
import TransferSend from './scenes/Send';

const Transfer = ({ match }) => (
  <Switch>
    <Route component={TransferSend} path={`${match.url}/send`} />
    <Route component={TransferComplete} path={`${match.url}/:transferAddress`} />
  </Switch>
);

export default Transfer;
