import ProfileEditForm from './components/Form'

class ProfileEdit extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    handleSubmit: PropTypes.func,
    user: PropTypes.object
  }

  render() {
    return (
      <div>
        <h3>Profile Edit</h3>

        {this.props.user && (
          <ProfileEditForm initialValues={this.props.user} />
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state.scenes.profile.scenes.edit,
    user: state.entities.users[state.services.session.userId]
  }),
  dispatch => ({
    handleSubmit: values => null
  })
)(ProfileEdit)
