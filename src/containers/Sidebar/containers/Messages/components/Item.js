/** Containers **/
import User from '../../../../User';

function SidebarMessagesItem({ address, message }) {
  return (
    <div className={styles.SidebarMessagesItem}>
      <div className={styles.SidebarMessagesItemUser}>
        <User
          address={address}
          company={message && message.text}
          position={null}
        />
      </div>

      <div className={styles.SidebarMessagesItemStatus}>
        {message && (
          <div className={styles.SidebarMessagesItemStatus}>
            {moment(message.date).format('HH:MM')}
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state, { address }) => {
  const messages = state.entities.messages.items.filter(message => message.address == address);

  return {
    message: messages[messages.length - 1]
  };
};

export default connect(mapStateToProps)(SidebarMessagesItem);
