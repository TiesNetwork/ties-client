import { withRouter } from 'react-router-dom'

/** Components **/
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import HeaderAccount from './components/Account'

class Header extends Component {
  static propTypes = {
    user: PropTypes.shape({
      photo: PropTypes.string
    })
  }

  handleUserClick = () => this.props.user && this.props.history.push({
    pathname: `/user/${this.props.user.id}`
  })

  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.HeaderLogo}>
          <div className={styles.HeaderLogoImage} />
        </div>

        <div className={styles.HeaderAccounts}>
          <HeaderAccount amount="10 000" currency="TIE"/>
          <HeaderAccount amount="100.28" currency="ETH"/>
          <HeaderAccount amount="100" currency="HMQ"/>
        </div>

        {this.props.user && (
          <div className={styles.HeaderUser}>
            <Button
              className={styles.HeaderUserButton}
              color={Button.color.CUSTOM}
              onClick={this.handleUserClick}
            >
              <Avatar
                className={styles.HeaderUserAvatar}
                src={this.props.user.photo}
              />
            </Button>
          </div>
        )}
      </div>
    )
  }
}

export default connect(state => ({
  user: state.entities.users[state.services.session.userId]
}))(withRouter(Header))
