/** Actions **/
import { selectContainer } from '../actions';

/** Components **/
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

function SidebarTab({ handleClick, icon, isCurrent, title }) {
  return (
    <Button
      className={classNames(
        styles.SidebarTab,
        isCurrent && styles.SidebarTabSelected
      )}
      color={Button.COLOR.CUSTOM}
      onClick={handleClick}
    >
      <Icon
        className={styles.SidebarTabIcon}
        type={icon}
      />

      <div className={styles.SidebarTabTitle}>
        {title}
      </div>
    </Button>
  );
}

const mapStateToProps = (state, { title }) => ({
  isCurrent: state.containers.sidebar.current == title
});
const mapDispatchToProps = (dispatch, { title }) => ({
  handleClick: () => dispatch(selectContainer(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTab);
