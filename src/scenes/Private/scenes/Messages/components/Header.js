function MessagesHeader({ name, online, surname }) {
  return (
    <div className={styles.MessagesHeader}>
      <div className={styles.MessagesHeaderName}>
        {name} {surname}
      </div>

      <div className={classNames(
        styles.MessagesHeaderStatus,
        online && styles.MessagesHeaderStatusOnline
      )}>
        {online ? 'online' : 'offline'}
      </div>
    </div>
  );
}

export default MessagesHeader;
