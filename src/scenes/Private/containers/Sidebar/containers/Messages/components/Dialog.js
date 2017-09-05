/** Components **/
import Avatar from '../../../../../../../components/Avatar';

function SidebarMessagesDialog({ message, onClick, user }) {
  console.log('Message: ', message);
  return (
    <div
      className={styles.SidebarMessagesDialog}
      onClick={onClick}
    >
      <Avatar
        className={styles.SidebarMessagesDialogAvatar}
        src={user.photo}
      />

      <div className={styles.SidebarMessagesDialogInfo}>
        <div className={styles.SidebarMessagesDialogName}>
          {user.name} {user.surname}
        </div>

        {message && (
          <div className={styles.SidebarMessagesDialogMessage}>
            {message.from != user.address && 'You:'} {message.text}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state, { user }) => {
  const messages = state.entities.messages.items.filter(message => message.address == user.address)
console.log(messages)
  return {
    message: messages[messages.length - 1]
  };
}
export default connect(mapStateToProps)(SidebarMessagesDialog);
