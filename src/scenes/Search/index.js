import { search } from './actions'
import SearchForm from './components/Form'

class Search extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    handleSubmit: PropTypes.func
  }

  render() {
    return (
      <div>
        <SearchForm
          onSubmit={this.props.handleSubmit}
        />
      </div>
    )
  }
}

export default connect(
  state => ({ ...state.scenes.search }),
  dispatch => ({
    /**
     * @param {{
     *   text: (string)
     * }} values
     */
    handleSubmit: values => dispatch(search(values.text))
  })
)(Search)
