/** Components **/
import Avatar from '../../components/Avatar'

/** Containers **/
import Rating from './containers/Rating';

const PersonalSize = {
  SMALL: 'Small'
};

class Personal extends Component {
  static propTypes = {
    company: PropTypes.string,
    country: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    surname: PropTypes.string
  }

  static SIZE = PersonalSize;

  render() {
    return (
      <div className={classNames(
        styles.Personal,
        this.props.size && styles[`Personal${this.props.size}`]
      )}>
        <Avatar
          className={styles.PersonalAvatar}
          src={this.props.photo}
        />

        <div className={styles.PersonalInfo}>
          {(this.props.name || this.props.surname) && (
            <div className={styles.PersonalName}>
              {this.props.name} {this.props.surname}
            </div>
          )}

          {(this.props.company || this.props.position) && (
            <div className={styles.PersonalPosition}>
              {this.props.company}, {this.props.position}
            </div>
          )}

          {this.props.country && (
            <div className={styles.PersonalCountry}>
              {this.props.country}
            </div>
          )}
        </div>

        <div className={styles.PersonalRating}>
          <Rating
            address={this.props.address}
            densed={!!this.props.size}
          />
        </div>
      </div>
    )
  }
}

export default Personal
