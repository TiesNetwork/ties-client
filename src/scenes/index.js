/** Actions **/
import { addMessage, createDialog, setOnline } from './actions';

/** Scenes **/
import Edit from './Edit';
import Invitation from './Invitation';
import Invoice from './Invoice';
import Messages from './Messages';
import Search from './Search';
import Topup from './Topup';
import Transaction from './Transaction';
import Transfer from './Transfer';
import User from './User';

class Scenes extends Component {
  componentDidMount() {
    const {
      address, contacts,
      addMessage, createDialog, setOnline
    } = this.props;

    Chat.connectCallback = address => setOnline(address, true);
    Chat.disconnectCallback = address => setOnline(address, false);

    Chat.messageCallback = (from, message) => {
      addMessage({ address: from, date: new Date(), from: from, text: message.toString() });
      createDialog(from);
    };
  }

  componentDidUpdate() {
    const { address, contacts } = this.props;
    Chat.create(address, contacts);
  }

  render() {
    return (
      <Switch>
        <Route component={Edit} path="/edit" />
        <Route component={Invitation} path="/invitation" />
        <Route component={Invoice} path="/invoice" />
        <Route component={Messages} path="/messages/:address" />
        <Route component={Search} path="/search" />
        <Route component={Topup} path="/topup" />
        <Route component={Transaction} path="/transaction/:tx" />
        <Route component={Transfer} path="/transfer" />
        <Route component={User} path="/user/:address" />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  address: state.entities.account.address,
  contacts: state.entities.users[state.entities.account.address].contacts
});
const mapDispatchToProps = dispatch => ({
  addMessage: message => dispatch(addMessage(message)),
  createDialog: (address) => dispatch(createDialog(address)),
  setOnline: (address, status) => dispatch(setOnline(address, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Scenes);
