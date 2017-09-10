/** Components **/
import Dialog from './components/Dialog';

function SidebarMessages({ contacts, history, matchParent }) {
  return (
    <div>
      {contacts && contacts.length > 0 && (
        <div className={styles.SidebarMessagesContainer}>
          {contacts.map(user => (
            <Dialog
              key={user.address}
              onClick={() => history.push(`/private/messages/${user.address}`)}
              selected={matchParent && matchParent.params.userAddress == user.address}
              user={user}
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

export default withRouter(connect(mapStateToProps)(SidebarMessages));
