import { connect } from 'react-redux'

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
