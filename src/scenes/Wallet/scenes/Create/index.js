import { connect } from 'react-redux'

import { create } from './actions'

import WalletCreateForm from './components/Form'

class WalletCreate extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Create new wallet {this.props.loading && '...'}
        </h3>

        <WalletCreateForm onSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}

WalletCreate.propTypes = {
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool
}

export default connect(
  state => ({ ...state.scenes.wallet.scenes.create }),
  dispatch => ({
    handleSubmit: values => dispatch(create(values))
  })
)(WalletCreate)
