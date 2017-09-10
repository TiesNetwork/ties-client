/** Components **/
import Icon from '../../components/Icon';
import Tab from './components/Tab';

/** Containers **/
import Contacts from './containers/Contacts';

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.SidebarContainer}>
        <Contacts />
      </div>

      <div className={styles.SidebarTabs}>
        <Tab icon={Icon.TYPE.CONTACTS} title="Contacts" />
        <Tab icon={Icon.TYPE.MESSAGES} title="Messages" />
        <Tab icon={Icon.TYPE.INVOICES} title="Invoices" />
      </div>
    </div>
  );
}

export default Sidebar;
