/** Components **/
import User from './components/Item';

function SidebarContacts({ contacts }) {
  return (
    <div className={styles.SidebarContacts}>
      {contacts && contacts.length > 0 && (
        <div className={styles.SidebarContactsContainer}>
          {contacts.map(address => (
            <User
              address={address}
              key={address}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  const user = state.entities.users[state.entities.account.address];

  return {
    contacts: user && user.contacts || []
  };
}

export default withRouter(connect(mapStateToProps)(SidebarContacts));
