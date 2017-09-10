/** Containers **/
import Contacts from './containers/Contacts';
import Experience from './containers/Experience';
import Personal from './containers/Personal';

function User(props) {
  return (
    <div>
      <Personal {...props} />
      <Experience {...props} />
      <Contacts {...props} />
    </div>
  );
}

const mapStateToProps = (state, { match }) => {
  const currentUser = state.entities.users[state.entities.account.address];

  return {
    address: match.params.address,
    isContact: currentUser.contacts && currentUser.contacts.indexOf(match.params.address) > - 1,
    isCurrentUser: currentUser.address == match.params.address
  };
}

export default connect(mapStateToProps)(User);
