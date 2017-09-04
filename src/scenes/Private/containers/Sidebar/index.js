/** Actions **/
import { selectContainer } from './actions';

/** Components **/
import Tab from './components/Tab';

/** Containers **/
import Contacts from './containers/Contacts';
import Invoices from './containers/Invoices';

class Sidebar extends Component {
  render() {
    const { current, handleTabClick } = this.props;

    return (
      <div className={styles.Sidebar}>
        <div className={styles.SidebarContainer}>
          {current == 'Contacts' && <Contacts />}
          {current == 'Invoices' && <Invoices />}
        </div>

        <div className={styles.SidebarTabs}>
          <Tab
            onClick={handleTabClick}
            selected={current === 'Contacts'}
            title="Contacts"
          />

          <Tab
            onClick={handleTabClick}
            selected={current === 'Messages'}
            title="Messages"
          />

          <Tab
            onClick={handleTabClick}
            selected={current === 'Invoices'}
            title="Invoices"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  current: state.scenes.containers.sidebar.current
});
const mapDispatchToProps = dispatch => ({
  handleTabClick: id => dispatch(selectContainer(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
