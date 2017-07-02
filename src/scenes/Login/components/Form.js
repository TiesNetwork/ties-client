import { Field, reduxForm } from 'redux-form'

class LoginForm extends React.Component {
  render() {
    return (
      <form>
        <Field
          component="input"
          name="key"
          placeholder="Private key or phrase"
        />

        <button>
          Send
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)
