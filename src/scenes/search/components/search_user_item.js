import Avatar from '../../../components/avatar'
import Button from '../../../components/button'
import Link from '../../../components/link'

import Styles from './search_user_item.scss'

class SearchUserItem extends React.Component {
  render() {
    return (
      <div className={Styles.SearchUserItem}>
        <Avatar />

        <div className={Styles.SearchUserItemInfo}>
          <Link to="/user">John Doe</Link>
          <div>Moscow, Russia</div>
          <div>Front-end Developer</div>
        </div>

        <div className={Styles.SearchUserItemActions}>
          <Button className={Styles.SearchUserItemAction}>
            Add to friends
          </Button>

          <Button className={Styles.SearchUserItemAction}>
            Transfer
          </Button>
        </div>
      </div>
    )
  }
}

export default SearchUserItem
