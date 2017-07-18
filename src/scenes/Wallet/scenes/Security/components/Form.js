import { Field, reduxForm } from 'redux-form'

class WalletSecurityForm extends React.Component {
  static propTypes = {
    hasPassword: PropTypes.bool
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {this.props.hasPassword && (
          <Field
            component="input"
            name="oldPassword"
            placeholder="Old password"
            type="password"
          />
        )}

        <Field
          component="input"
          name="newPassword"
          placeholder="New password"
          type="password"
        />

        <Field
          component="input"
          name="newPasswordConfirm"
          placeholder="New password confirm"
          type="password"
        />

        <button>
          Save password
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'WalletSecurityForm'
})(WalletSecurityForm)
