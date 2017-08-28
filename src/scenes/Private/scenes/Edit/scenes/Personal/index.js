/** Actions **/
import { updatePersonal } from './actions'

/** Components **/
import Block from '../../../../components/Block'
import EditPersonalForm from './components/Form'

class EditPersonal extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    personal: PropTypes.object
  }

  render() {
    return (
      <div>
        <Block title="Personal Information">
          <EditPersonalForm
            initialValues={this.props.personal}
            onSubmit={this.props.handleSubmit}
          />
        </Block>
      </div>
    )
  }
}

export default connect(
  state => ({
    personal: state.entities.users[state.services.session.userId] || {}
  }),
  dispatch => ({
    handleSubmit: values => dispatch(updatePersonal(values))
  })
)(EditPersonal)
