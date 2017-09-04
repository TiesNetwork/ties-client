function MessagesHeader({ name, surname }) {
  return (
    <div className={styles.MessagesHeader}>
      <div className={styles.MessagesHeaderName}>
        {name} {surname}
      </div>
    </div>
  );
}

export default MessagesHeader;
