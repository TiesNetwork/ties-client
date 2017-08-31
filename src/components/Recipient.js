import Avatar from './Avatar';

const Recipient = ({ className, name, photo, surname }) => (
  <div className={classNames(className, styles.Recipient)}>
    <Avatar
      className={styles.RecipientAvatar}
      src={photo}
    />

    <div className={styles.RecipientName}>
      {name} {surname}
    </div>
  </div>
);

export default Recipient;
