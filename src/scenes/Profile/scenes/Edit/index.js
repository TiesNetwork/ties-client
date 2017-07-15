import { connect } from 'react-redux'

import ProfileEditForm from './components/Form'

class ProfileEdit extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    handleSubmit: PropTypes.func
  }

  render() {
    return (
      <div>
        <h3>Profile Edit</h3>

        <ProfileEditForm />
      </div>
    )
  }
}

export default connect(
  state => ({ ...state.scenes.profile.scenes.edit }),
  dispatch => ({
    handleSubmit: values => null
  })
)(ProfileEdit)
