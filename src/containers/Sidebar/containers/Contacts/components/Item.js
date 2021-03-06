import { matchPath } from 'react-router-dom';

/** Containers **/
import Personal from '../../../../../containers/Personal';

function SidebarContactsItem({ address, history, location, personal }) {
  const match = matchPath(location.pathname, '/user/:address');

  return (
    <div
      className={classNames(
        styles.SidebarContactsItem,
        match && match.params.address == address && styles.SidebarContactsItemSelected
      )}
      onClick={() => history.push(`/user/${address}`)}
    >
      <Personal {...personal} densed />
    </div>
  );
}

const mapStateToProps = (state, { address }) => ({
  personal: state.entities.users[address]
});

export default withRouter(connect(mapStateToProps)(SidebarContactsItem));
