import { connect } from 'react-redux'
import { walletSetPassword } from './actions'
import WalletSecurityForm from './components/Form'

class WalletSecurity extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    handleSubmit: PropTypes.func,
    wallet: PropTypes.shape({
      address: PropTypes.string,
      password: PropTypes.string,
      phrase: PropTypes.string
    })
  }

  render() {
    return (
      <div>
        <h3>Wallet Security</h3>

        <span>Address: {this.props.wallet.address}</span>

        <WalletSecurityForm
          hasPassword={!!this.props.wallet.password}
          onSubmit={this.props.handleSubmit}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state.scenes.wallet.scenes.recovery,
    wallet: state.entities.wallet
  }),
  dispatch => ({
    handleSubmit: values => dispatch(walletSetPassword(values.newPassword, values.oldPassword))
  })
)(WalletSecurity)
