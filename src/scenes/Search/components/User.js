import { withRouter } from 'react-router-dom'

/** Components **/
import Block from '../../../components/Block'
import Personal from '../../../components/Personal'

class SearchUser extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  handleClick = () => this.props.id && this.props.history.push(`/users/${this.props.id}`)

  render() {
    return (
      <Block
        className={styles.SearchUser}
        onClick={this.handleClick}
      >
        <Personal {...this.props} />
      </Block>
    )
  }
}

export default connect((state, ownProps) => ({
  ...state.entities.users[ownProps.id]
}))(withRouter(SearchUser))
