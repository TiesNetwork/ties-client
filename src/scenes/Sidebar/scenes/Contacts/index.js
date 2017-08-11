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
        {this.props.contacts && this.props.contacts.length > 0 && (
          <div className={styles.SidebarContactsContainer}>
            {this.props.contacts.map((contact, index) => (
              <SidebarContactsItem {...contact} key={index} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default connect(state => {
  const user = state.entities.users[state.services.session.userId]

  return {
    contacts: (user.contacts || []).map(userId => state.entities.users[userId])
  }
})(SidebarContacts)
