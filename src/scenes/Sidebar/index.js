/** Components **/
import SidebarTab from './components/Tab'

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.Sidebar}>
        <div className={styles.SidebarContainer}>
          Sidebar
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
