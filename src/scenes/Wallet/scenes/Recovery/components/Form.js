import { Field, reduxForm } from 'redux-form'

class WalletRecoveryForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component="input"
          name="phrase"
          placeholder="Phrase or private key"
        />

        <button>
          Recovery wallet
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'WalletRecoveryForm'
})(WalletRecoveryForm)
