import { Field, reduxForm } from 'redux-form'

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component="input"
          name="password"
          placeholder="Password"
        />

        <button>
          Login
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm)
