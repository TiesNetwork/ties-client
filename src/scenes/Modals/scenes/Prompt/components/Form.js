/** Actions **/
import { closeModal } from '../../../../../services/modals'

/** Components **/
import Button from '../../../../../components/Button'
import Form, { Actions, Input } from '../../../../../components/Form'

class ModalsPromptForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Input {...this.props.input}
          autoFocus={true}
          name="input"
        />

        <Actions>
          <Button
            color={Button.COLOR.SECONDARY}
            onClick={this.props.closeModal}
          >
            Cancel
          </Button>

          <Button type="submit">
            Ok
          </Button>
        </Actions>
      </Form>
    )
  }
}

const mapStateToProps = state => ({ input: state.services.modals.prompt.input })
    , mapDispatchToProps = dispatch => ({  closeModal: () => dispatch(closeModal('prompt')) })

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'ModalsPromptForm'
})(ModalsPromptForm))
