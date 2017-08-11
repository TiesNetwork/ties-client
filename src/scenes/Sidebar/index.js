/** Components **/
import SidebarTab from './components/Tab'

/** Scenes **/
import SidebarContacts from './scenes/Contacts'

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.Sidebar}>
        <div className={styles.SidebarContainer}>
          <SidebarContacts />
        </div>

        <div className={styles.SidebarTabs}>
          <SidebarTab title="Contacts" />
          <SidebarTab title="Messages" />
          <SidebarTab title="Invoices" />
        </div>
      </div>
    )
  }
}

export default Sidebar
