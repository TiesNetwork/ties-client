import { reduxForm } from 'redux-form'

class WalletCreateForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <button>
          Create new wallet
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'WalletCreateForm'
})(WalletCreateForm)
