/** Actions **/
import { search } from './actions'

/** Components **/
import SearchForm from './components/Form'
import SearchUser from './components/User'

class Search extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    result: PropTypes.shape({
      users: PropTypes.arrayOf(
        PropTypes.string
      )
    })
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.props.handleSubmit} />

        {this.props.result && this.props.result.users && (
          <div>
            <div className={styles.SearchResultTitle}>
              Search Results ({this.props.result.users.length || 0})
            </div>

            <div>
              {this.props.result.users.map(userId => <SearchUser id={userId} />)}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    result: state.scenes.search.result
  }),
  dispatch => ({
    handleSubmit: values => dispatch(search(values.text))
  })
)(Search)
