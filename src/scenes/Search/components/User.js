/** Components **/
import Block from '../../../components/Block'
import Personal from '../../../components/Personal'

class SearchUser extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    photo: PropTypes.string
  }

  render() {
    return (
      <Block>
        <Personal {...this.props} />
      </Block>
    )
  }
}

export default connect((state, ownProps) => ({
  ...state.entities.users[ownProps.id]
}))(SearchUser)
