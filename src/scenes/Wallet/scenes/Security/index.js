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

        {this.props.wallet && (
          <div>
            <span>Address: {this.props.wallet.address}</span>

            <br />
            <br />

            <WalletSecurityForm
              hasPassword={!!this.props.wallet.password}
              onSubmit={this.props.handleSubmit}
            />
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state.scenes.wallet.scenes.security,
    wallet: state.entities.wallets[state.services.session.userId]
  }),
  dispatch => ({
    /**
     * @param {{
     *   newPassword: (string),
     *   oldPassword: (string)
     * }} values
     */
    handleSubmit: values => dispatch(walletSetPassword(values.newPassword, values.oldPassword))
  })
)(WalletSecurity)
