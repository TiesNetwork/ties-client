import { Field, reduxForm } from 'redux-form'

class ProfileEditForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component="input"
          name="name"
          placeholder="Name"
        />

        <Field
          component="input"
          name="surname"
          placeholder="Surname"
        />

        <br />

        <Field
          component="input"
          name="country"
          placeholder="Country"
        />

        <br />

        <Field
          component="input"
          name="company"
          placeholder="Company"
        />

        <br />

        <Field
          component="input"
          name="position"
          placeholder="Position"
        />

        <br />

        <Field
          component="textarea"
          name="description"
          placeholder="Description"
        />

        <br />

        <button>
          Save
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'ProfileEditForm'
})(ProfileEditForm)
