/** Components **/
import Block from '../../../components/Block';

/** Containers **/
import Personal from '../../../containers/Personal';

function SearchUser({ history, user }) {
  return (
    <Block
      className={styles.SearchUser}
      onClick={() => history.push(`/private/user/${user.address}`)}
    >
      <Personal {...user} />
    </Block>
  )
}

const mapStateToProps = (state, { address }) => ({
  user: state.entities.users[address]
});

export default withRouter(connect(mapStateToProps)(SearchUser));
