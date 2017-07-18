import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import LoginForm from './components/Form'

class Login extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    handleSubmit: PropTypes.func
  }

  render() {
    return (
      <div>
        <h3>
          Login
        </h3>

        <LoginForm onSubmit={this.props.handleSubmit} />

        <Link to="/wallet/create">Create new wallet</Link>&nbsp;|&nbsp;
        <Link to="/wallet/recovery">Recover wallet</Link>
      </div>
    )
  }
}

export default connect(
  state => ({ ...state.scenes.login }),
  dispatch => ({
    handleSubmit: null
  })
)(Login)
