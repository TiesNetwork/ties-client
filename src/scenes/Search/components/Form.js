import { Field, reduxForm } from 'redux-form'

class SearchForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component="input"
          name="text"
          placeholder="Search string"
        />

        <button>
          Search
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'SearchForm'
})(SearchForm)
