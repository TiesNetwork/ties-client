import SearchUserItemComponent from './item/user'

/**
 * Что-то типо оболочки для элементов поиска, чтобы сделать общую обработку событий и рендер.
 */
class SearchItem extends React.Component {
  render() {
    return React.cloneElement(this.props.children, {
      className: 'SearchItem'
    })
  }
}

SearchItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export const SearchUserItem = props => (
  <SearchItem>
    <SearchUserItemComponent {...props} />
  </SearchItem>
)
