import { Field, reduxForm } from 'redux-form'

class SearchForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component="input"
          name="search"
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
