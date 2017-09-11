/** Actions **/
import { fetchUser } from './actions';

/** Components **/
import Avatar from '../../components/Avatar';

class User extends Component {
  componentDidMount() {
    const { fetchUser, user } = this.props;
    console.log(!user.name);
    !user.name && fetchUser();
  }

  componentDidUpdate(prevProps) {
    const { address, fetchUser, user } = this.props;

    if (address != prevProps.address) {
      !user.name && fetchUser();
    }
  }

  render() {
    const user = { ...this.props.user, ...this.props };

    return (
      <div className={styles.User}>
        {user && (
          <div className={styles.UserContainer}>
            <Avatar
              className={styles.UserAvatar}
              src={user.photo}
            />

            <div className={styles.UserInfo}>
              {(user.name || user.surname) && (
                <div className={styles.UserName}>
                  {user.name} {user.surname}
                </div>
              )}

              {(user.company || user.position) && (
                <div className={styles.UserPosition}>
                  {user.company} {user.position && `, ${user.position}`}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, { address }) => ({
  user: state.entities.users[address]
});
const mapDispatchToProps = (dispatch, { address }) => ({
  fetchUser: () => dispatch(fetchUser(address))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
