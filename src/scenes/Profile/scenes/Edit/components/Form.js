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
          name="surnname"
          placeholder="Surname"
        />

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
