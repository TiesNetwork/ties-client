/** Components **/
import Button from '../../components/Button'
import HeaderAccount from './components/Account'

class Header extends Component {
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
      </div>
    )
  }
}

export default Header
