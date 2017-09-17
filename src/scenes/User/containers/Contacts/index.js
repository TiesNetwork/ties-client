/** Actions **/
import { fetchContacts } from './actions';

/** Components **/
import Block from '../../../../components/Block';
import Button from '../../../../components/Button';
import User from './components/Item';

class UserContacts extends Component {
  componentDidMount() {
    const { contacts, fetchContacts } = this.props;
    !contacts && fetchContacts();
  }

  componentDidUpdate(prevProps) {
    const { address, contacts, fetchContacts } = this.props;

    if (address != prevProps.address) {
      !contacts && fetchContacts();
    }
  }

  render() {
    const { contacts, history, isCurrentUser } = this.props;

    return (
      <Block title="Contacts">
        {contacts && contacts.length > 0 && (
          <div className={styles.UserContactsList}>
            {contacts.map(address => <User address={address} key={address} />)}
          </div>
        )}
      </Block>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  address: match.params.address,
  contacts: state.entities.users[match.params.address].contacts
});
const mapDispatchToProps = (dispatch, { match }) => ({
  fetchContacts: () => dispatch(fetchContacts(match.params.address))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserContacts));
