import Avatar from '../../../components/Avatar'

class UserContact extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    photo: PropTypes.string,
    surname: PropTypes.string
  }

  handleClick = () => this.props.onClick && this.props.onClick(this.props.id)

  render() {
    return (
      <div
        className={styles.UserContact}
        onClick={this.handleClick}
      >
        <Avatar
          className={styles.UserContactAvatar}
          src={this.props.photo}
        />

        <div className={styles.UserContactSurname}>
          {this.props.surname}
        </div>

        <div className={styles.UserContactName}>
          {this.props.name}
        </div>
      </div>
    )
  }
}

export default UserContact
