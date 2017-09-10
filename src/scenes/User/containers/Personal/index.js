/** Actions **/
import { fetchUser } from './actions';

/** Components **/
import Block from '../../../../components/Block';
import Tag from '../../../../components/Tag';

/** Containers **/
import Actions from './containers/Actions';
import Personal from '../../../../containers/Personal';

class UserPersonal extends Component {
  componentDidMount() {
    const { fetchUser, personal } = this.props;
    !personal && fetchUser();
  }

  componentDidUpdate(prevProps) {
    const { address, fetchUser, personal } = this.props;

    if (address != prevProps.address) {
      !personal && fetchUser();
    }
  }

  render() {
    const { isCurrentUser, personal } = this.props;

    return (
      <Block title="Personal Information">
        {personal && (
          <div>
            <Personal {...personal} />

            {personal.keywords && personal.keywords.length > 0 && (
              <div className={styles.UserPersonalTags}>
                {personal.keywords.map((keyword, index) => (
                  <Tag
                    className={styles.UserPersonalTag}
                    key={index}
                    title={keyword}
                  />
                ))}
              </div>
            )}

            {!isCurrentUser && <Actions {...this.props} />}
          </div>
        )}
      </Block>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  personal: state.entities.users[match.params.address]
});
const mapDispatchToProps = (dispatch, { match }) => ({
  fetchUser: () => dispatch(fetchUser(match.params.address))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPersonal));
