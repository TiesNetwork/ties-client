import Avatar from '../../../../../components/Avatar'

class SidebarContactsItem extends Component {
  static propTypes = {
    company: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    position: PropTypes.string,
    surname: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.SidebarContactsItem}>
        <Avatar
          className={styles.SidebarContactsItemAvatar}
          src={this.props.photo}
        />

        <div className={styles.SidebarContactsItemPersonal}>
          <div className={styles.SidebarContactsItemName}>
            {this.props.name} {this.props.surname}
          </div>

          <div className={styles.SidebarContactsItemPosition}>
            {this.props.position}
          </div>

          <div className={styles.SidebarContactsItemCompany}>
            {this.props.company}
          </div>
        </div>
      </div>
    )
  }
}

export default SidebarContactsItem
