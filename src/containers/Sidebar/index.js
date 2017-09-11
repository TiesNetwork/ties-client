/** Components **/
import Icon from '../../components/Icon';
import Tab from './components/Tab';

/** Containers **/
import Contacts from './containers/Contacts';
import Invoices from './containers/Invoices';
import Messages from './containers/Messages';

function Sidebar({ current }) {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.SidebarContainer}>
        {current == 'Contacts' && <Contacts />}
        {current == 'Invoices' && <Invoices />}
        {current == 'Messages' && <Messages />}
      </div>

      <div className={styles.SidebarTabs}>
        <Tab icon={Icon.TYPE.CONTACTS} title="Contacts" />
        <Tab icon={Icon.TYPE.MESSAGES} title="Messages" />
        <Tab icon={Icon.TYPE.INVOICES} title="Invoices" />
      </div>
    </div>
  );
}

const mapStateToProps = state => state.containers.sidebar;

export default withRouter(connect(mapStateToProps)(Sidebar));
