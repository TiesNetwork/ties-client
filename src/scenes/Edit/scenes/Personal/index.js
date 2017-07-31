import { editPersonal } from './actions'
import EditPersonalForm from './components/Form'

class EditPersonal extends React.Component {
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
          <EditPersonalForm
            initialValues={this.props.user}
            onSubmit={this.props.handleSubmit}
          />
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state.scenes.edit.scenes.personal,
    user: state.entities.users[state.services.session.userId]
  }),
  dispatch => ({
    handleSubmit: values => dispatch(editPersonal(values))
  })
)(EditPersonal)
