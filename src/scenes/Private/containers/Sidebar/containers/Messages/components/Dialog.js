/** Components **/
import Avatar from '../../../../../../../components/Avatar';

function SidebarMessagesDialog({ onClick, user }) {
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

        <div className={styles.SidebarMessagesDialogMessage}>
          Message
        </div>
      </div>
    </div>
  );
}

export default SidebarMessagesDialog;
