import SidebarContactsItem from './components/Item'

class SidebarContacts extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape(SidebarContactsItem.propTypes)
    )
  }

  render() {
    return (
      <div>
        Contacts
      </div>
    )
  }
}

export default SidebarContacts
