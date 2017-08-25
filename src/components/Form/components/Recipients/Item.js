/** Components **/
import Avatar from '../../../Avatar'

class FormRecipientsItem extends Component {
  static propTypes = {
    address: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.object,
    surname: PropTypes.string
  }

  render() {
    return (
      <div className={styles.FormRecipientsItem}>
        <Avatar
          className={styles.FormRecipientsItemAvatar}
          src={this.props.photo}
        />

        <div className={styles.FormRecipientsItemName}>
          {this.props.name} {this.props.surname}
        </div>
      </div>
    )
  }
}

export default FormRecipientsItem
