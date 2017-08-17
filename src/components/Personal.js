/** Components **/
import Avatar from './Avatar'

class Personal extends Component {
  static propTypes = {
    company: PropTypes.string,
    country: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    surname: PropTypes.string
  }

  render() {
    return (
      <div className={styles.Personal}>
        <Avatar
          className={styles.PersonalAvatar}
          src={this.props.photo}
        />

        <div className={styles.PersonalInfo}>
          <div className={styles.PersonalName}>
            {this.props.name} {this.props.surname}
          </div>

          <div className={styles.PersonalPosition}>
            {this.props.company}, {this.props.position}
          </div>

          <div className={styles.PersonalCountry}>
            {this.props.country}
          </div>
        </div>
      </div>
    )
  }
}

export default Personal
