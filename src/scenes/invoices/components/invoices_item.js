import Avatar from '../../../components/avatar'
import Link from '../../../components/link'

import Styles from './invoices_item.scss'

class InvoicesItem extends React.Component {
  render() {
    return (
      <div className={Styles.InvoicesItem}>
        <div className={Styles.InvoicesItemUser}>
          <Avatar className={Styles.InvoicesItemUserAvatar} />

          <Link
            className={Styles.InvoicesItemUserLink}
            to="/user"
          >
            {this.props.user.fullName}
          </Link>
        </div>

        <div className={Styles.InvoicesItemDescription}>
          {this.props.description}
        </div>

        <div className={Styles.InvoicesItemTotal}>
          {this.props.total}
        </div>

        <div className={Styles.InvoicesItemStatus}>
          {this.props.status}
        </div>
      </div>
    )
  }
}

InvoicesItem.propTypes = {
  description: PropTypes.string,
  status: PropTypes.string,
  total: PropTypes.string,
  user: PropTypes.shape({
    fullName: PropTypes.string
  })
}

export default InvoicesItem
