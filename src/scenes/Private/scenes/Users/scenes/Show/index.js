/** Actions **/
import { getContacts, getProjects } from './actions';

/** Components **/
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Personal from './components/Personal';

class UsersShow extends Component {
  componentDidMount() {
    const { address, dispatch } = this.props;

    dispatch(getContacts(address))
    dispatch(getProjects(address));
  }

  render() {
    const { personal } = this.props;

    return (
      <div>
        <Personal {...this.props} />

        {personal && <Experience {...this.props} />}
        {personal && <Contacts {...this.props} />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.entities.account.id];
  const user = state.entities.users[ownProps.match.params.userId];

  return {
    address: ownProps.match.params.userId,
    contacts: user.contacts,
    isCurrentUser: currentUser.address === ownProps.match.params.userId,
    isContact: currentUser.contacts && currentUser.contacts.indexOf(user.address) > -1,
    personal: { ...user },
    projects: user ? (user.projects || []).map(projectId => state.entities.projects[projectId]) : null
  };
};

export default connect(mapStateToProps)(UsersShow);
