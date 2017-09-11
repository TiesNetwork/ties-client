function MessagesHeader({ name, online, surname }) {
  return (
    <div className={styles.MessagesHeader}>
      {(name || surname) && (
        <div className={styles.MessagesHeaderName}>
          {name} {surname}
        </div>
      )}

      <div className={styles.MessagesHeaderStatus}>
        {online ? 'online' : 'offline'}
      </div>
    </div>
  );
}

export default MessagesHeader;
