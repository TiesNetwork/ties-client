/** Actions **/
import { closeModal } from '../../../../../services/modals'

/** Components **/
import Button from '../../../../../components/Button'
import Form, { Actions, Input } from '../../../../../components/Form'

class ModalsPromptForm extends Component {
  render() {
    console.log(this.props)

    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Input {...this.props.input}
          autoFocus={true}
          name="input"
        />

        <Actions>
          <Button
            color={Button.COLOR.SECONDARY}
            onClick={this.props.handleCancelClick}
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

export default connect(
  state => ({ input: state.services.modals.prompt.input }),
  dispatch => ({
    handleCancelClick: () => dispatch(closeModal('prompt'))
  })
)(reduxForm({
  form: 'ModalsPromptForm'
})(ModalsPromptForm))
