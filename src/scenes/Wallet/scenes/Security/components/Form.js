import { Field, reduxForm } from 'redux-form'

class WalletSecurityForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component="input"
          name="password"
          placeholder="Password"
          type="password"
        />

        <Field
          component="input"
          name="password_confirm"
          placeholder="Confirm password"
          type="password"
        />

        <button>
          Update password
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'WalletSecurityForm'
})(WalletSecurityForm)
