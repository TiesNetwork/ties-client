import { withRouter } from 'react-router-dom';

/** Components **/
import Block from '../../../../../components/Block';
import Personal from '../../../../../components/Personal';

const SearchUser = props => (
  <Block
    className={styles.SearchUser}
    onClick={() => props.id && props.history.push(`/users/${props.id}`)}
  >
    <Personal {...props} />
  </Block>
);

const mapStateToProps = (state, ownProps) => ({
  ...state.entities.users[ownProps.id]
});

export default connect(mapStateToProps)(withRouter(SearchUser));
