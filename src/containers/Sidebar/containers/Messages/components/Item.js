import { matchPath } from 'react-router-dom';

/** Containers **/
import User from '../../../../User';

function SidebarMessagesItem({ address, history, location, message }) {
  const match = matchPath(location.pathname, '/messages/:address');

  return (
    <div
      className={classNames(
        styles.SidebarMessagesItem,
        match && match.params.address == address && styles.SidebarMessagesItemSelected
      )}
      onClick={() => history.push(`/messages/${address}`)}
    >
      <div className={styles.SidebarMessagesItemUser}>
        <User
          address={address}
          company={message && `${message.from != address ? 'You: ' : ''}${message.text}`}
          position={null}
        />
      </div>

      <div className={styles.SidebarMessagesItemStatus}>
        {message && (
          <div className={styles.SidebarMessagesItemDate}>
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

export default withRouter(connect(mapStateToProps)(SidebarMessagesItem));
