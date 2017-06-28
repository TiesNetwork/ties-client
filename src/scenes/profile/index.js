import Avatar from '../../components/avatar'
import Button from '../../components/button'

import Styles from './styles.scss'

class Profile extends React.Component {
  handleCreateInvoiceClick = () => {
    this.props.history.push({
      pathname: '/invoices/new'
    })
  }

  render() {
    return (
      <div className={Styles.Profile}>
        <div className={Styles.ProfileHeader}>
          <Avatar />

          <div className={Styles.ProfileHeaderInfo}>
            <div>
              John Doe
            </div>

            <div>
              Moscow, Russia
            </div>

            <div>
              Front-end Developer
            </div>
          </div>

          <div className={Styles.ProfileHeaderActions}>
            <Button
              className={Styles.ProfileHeaderAction}
              onClick={this.handleCreateInvoiceClick}
            >
              Create Invoice
            </Button>

            <Button className={Styles.ProfileHeaderAction}>
              Transfer
            </Button>
          </div>
        </div>

        <div className={Styles.ProfileBalance}>
          <h3>
            My Balances:
          </h3>

          <div>
            <div>TNC: 10 000</div>
            <div>ETH: 100.28</div>
            <div>HMQ: 100</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
