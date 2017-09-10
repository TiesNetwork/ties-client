/** Components **/
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
        <Tab title="Contacts" />
        <Tab title="Messages" />
        <Tab title="Invoices" />
      </div>
    </div>
  );
}

export default Sidebar;
