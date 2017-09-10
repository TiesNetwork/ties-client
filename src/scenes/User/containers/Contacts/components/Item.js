/** Components **/
import Avatar from '../../../../../components/Avatar';

function UserContactsItem({ address, history, name, photo, surname }) {
  return (
    <div
      className={styles.UserContactsItem}
      onClick={() => history.push(`/private/user/${address}`)}
    >
      <Avatar
        className={styles.UserContactsItemAvatar}
        src={photo}
      />

      <div className={styles.UserContactsItemInfo}>
        <div className={styles.UserContactsItemSurname}>
          {surname}
        </div>

        <div className={styles.UserContactsItemName}>
          {name}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, { address }) => state.entities.users[address];

export default withRouter(connect(mapStateToProps)(UserContactsItem));
