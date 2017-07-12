import { connect } from 'react-redux'
import { walletRecovery } from './actions'
import WalletRecoveryForm from './components/Form'

class WalletRecovery extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    handleSubmit: PropTypes.func
  }

  render() {
    return (
      <div>
        <h3>Wallet recovery</h3>

        <WalletRecoveryForm onSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}

export default connect(
  state => ({ ...state.scenes.wallet.scenes.recovery }),
  dispatch => ({
    handleSubmit: values => dispatch(walletRecovery(values.phrase))
  })
)(WalletRecovery)
