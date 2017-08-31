import Avatar from '../../../../../../../../components/Avatar';

const UsersShowContactsUser = ({ address, history, name, photo, surname }) => (
  <div
    className={styles.UsersShowContactsUser}
    onClick={() => history.push(`/private/users/${address}`)}
  >
    <Avatar
      className={styles.UsersShowContactsUserAvatar}
      src={photo}
    />

    <div className={styles.UsersShowContactsUserName}>
      <strong>{surname}</strong>
      {name}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => state.entities.users[ownProps.address];

export default connect(mapStateToProps)(withRouter(UsersShowContactsUser));
