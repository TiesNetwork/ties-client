import Avatar from '../../common/avatar'
import Button from '../../common/button'

import Style from './user.scss'

class SearchUserItem extends React.Component {
  render() {
    return (
      <div className={classNames(this.props.className, Style.SearchUserItem)}>
        <Avatar className={Style.SearchUserItemAvatar} />

        <div className={Style.SearchUserItemInfo}>
          {this.props.fullName && (
            <div className="SearchUserItemInfoFullName">
              {this.props.fullName}
            </div>
          )}

          {this.props.location && (
            <div className="SearchUserItemInfoLocation">
              {this.props.location}
            </div>
          )}
        </div>

        <div className={Style.SearchUserItemActions}>
          <Button className={Style.SearchUserItemAction}>Добавить в друзья</Button>
          <Button className={Style.SearchUserItemAction}>Перевод</Button>
        </div>
      </div>
    )
  }
}

SearchUserItem.propTypes = {
  fullName: PropTypes.string,
  location: PropTypes.string
}

export default SearchUserItem
