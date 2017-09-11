/** Actions **/
import { fetchUser } from './actions';

/** Components **/
import Avatar from '../../components/Avatar';

class User extends Component {
  componentDidMount() {
    const { fetchUser, user } = this.props;
    !user && fetchUser();
  }

  componentDidUpdate(prevProps) {
    const { address, fetchUser, user } = this.props;

    if (address != prevProps.address) {
      !user && fetchUser();
    }
  }

  render() {
    const { company, name, photo, position, surname } = this.props;

    return (
      <div className={styles.User}>
        <Avatar
          className={styles.UserAvatar}
          src={photo}
        />

        <div className={styles.UserInfo}>
          {(name || surname) && (
            <div className={styles.UserName}>
              {name} {surname}
            </div>
          )}

          {(company || position) && (
            <div className={styles.UserPosition}>
              {company} {position && `, ${position}`}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ ...state.entities.users[ownProps.address], ...ownProps });
const mapDispatchToProps = (dispatch, { address }) => ({
  fetchUser: () => dispatch(fetchUser(address))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
