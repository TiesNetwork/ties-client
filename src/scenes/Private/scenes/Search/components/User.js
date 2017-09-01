/** Components **/
import Block from '../../../../../components/Block';
import Personal from '../../../../../components/Personal';

function SearchUser({ history, user }) {
  return (
    <Block
      className={styles.SearchUser}
      onClick={() => history.push(`/private/users/${user.address}`)}
    >
      <Personal {...user} />
    </Block>
  );
}

const mapStateToProps = (state, { address }) => ({
  user: state.entities.users[address]
});

export default connect(mapStateToProps)(withRouter(SearchUser));
