/** Actions **/
import { selectContainer } from '../actions';

/** Components **/
import Button from '../../../../../components/Button';

function SidebarTab({ handleClick, isCurrent, title }) {
  return (
    <Button
      className={classNames(
        styles.SidebarTab,
        isCurrent && styles.SidebarTabSelected
      )}
      color={Button.COLOR.CUSTOM}
      onClick={handleClick}
    >
      <div className={styles.SidebarTabTitle}>
        {title}
      </div>
    </Button>
  );
}

const mapStateToProps = (state, { title }) => ({
  isCurrent: state.scenes.containers.sidebar.current == title
});
const mapDispatchToProps = (dispatch, { title }) => ({
  handleClick: () => dispatch(selectContainer(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTab);
