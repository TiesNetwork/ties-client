import { connect } from 'react-redux'
import { createWallet } from './actions'
import WalletCreateForm from './components/Form'

class WalletCreate extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    handleSubmit: PropTypes.func
  }

  render() {
    return (
      <div>
        <h3>
          Create wallet
        </h3>

        <WalletCreateForm onSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}

export default connect(
  state => ({ ...state.scenes.wallet.scenes.create }),
  dispatch => ({
    handleSubmit: values => dispatch(createWallet())
  })
)(WalletCreate)
