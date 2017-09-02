import Avatar from '../../../../../../../../components/Avatar';

const UsersUserContactsUser = ({ address, history, name, photo, surname }) => (
  <div
    className={styles.UsersUserContactsUser}
    onClick={() => history.push(`/private/users/${address}`)}
  >
    <Avatar
      className={styles.UsersUserContactsUserAvatar}
      src={photo}
    />

    <div className={styles.UsersUserContactsUserName}>
      <strong>{surname}</strong>
      {name}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => state.entities.users[ownProps.address];

export default connect(mapStateToProps)(withRouter(UsersUserContactsUser));
