/** Components **/
import User from './components/Item';

function SidebarContacts({ contacts, history }) {
  return (
    <div>
      {contacts && contacts.length > 0 && (
        <div className={styles.SidebarContactsContainer}>
          {contacts.map(user => (
            <User {...user}
              key={user.address}
              onClick={() => history.push(`/private/user/${user.address}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  contacts: (state.entities.users[state.entities.account.address].contacts || []).map(address =>
    state.entities.users[address])
});

export default connect(mapStateToProps)(withRouter(SidebarContacts));
