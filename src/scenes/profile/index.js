import { Route } from 'react-router-dom'

import Avatar from '../../components/avatar'
import Button from '../../components/button'

import ProfileEdit from './scenes/edit'

import Styles from './styles.scss'

class Profile extends React.Component {
  handleCreateInvoiceClick = () => {
    this.props.history.push({
      pathname: '/invoices/new'
    })
  }

  handleEditClick = () => {
    this.props.history.push({
      pathname: '/profile/edit'
    })
  }


  render() {
    return (
      <div className={Styles.Profile}>
        {this.props.match.isExact && (
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

              <Button
                className={Styles.ProfileHeaderAction}
                onClick={this.handleEditClick}
              >
                Edit info
              </Button>
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
        )}


        <Route component={ProfileEdit} path="/profile/edit" />
      </div>
    )
  }
}

export default Profile
