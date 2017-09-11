function MessagesItem({ date, from, isIncoming, text }) {
  return (
    <div className={classNames(
      styles.MessagesItem,
      isIncoming && styles.MessagesItemIncoming
    )}>
      <div className={styles.MessagesItemArrow} />

      <div className={styles.MessagesItemText}>
        {text}
      </div>

      <div className={styles.MessagesItemDate}>
        {moment(date).format('HH:MM')}
      </div>
    </div>
  );
}

export default MessagesItem;
