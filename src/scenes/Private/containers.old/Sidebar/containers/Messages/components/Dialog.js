/** Components **/
import Avatar from '../../../../../../../components/Avatar';

function SidebarMessagesDialog({ message, onClick, selected, user }) {
  return (
    <div
      className={classNames(
        styles.SidebarMessagesDialog,

        selected && styles.SidebarMessagesDialogSelected
      )}
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
            {message.from != user.address && (
              <span className={styles.SidebarMessagesDialogMessageYou}>
                You:
              </span>
            )}

            {message.text}
          </div>
        )}
      </div>

      <div className={styles.SidebarMessagesDialogStatus}>
        {message && (
          <div className={styles.SidebarMessagesDialogDate}>
            {moment(message.date).format('HH:MM')}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state, { user }) => {
  const messages = state.entities.messages.items.filter(message => message.address == user.address)

  return {
    message: messages[messages.length - 1]
  };
}
export default connect(mapStateToProps)(SidebarMessagesDialog);
