/** Actions **/
import { closeModal } from '../../../../../services/modals';

/** Components **/
import Button from '../../../../../components/Button'
import Form, { Actions, Input } from '../../../../../components/Form'

const PromptForm = ({ handleCancelClick, handleSubmit, input }) => (
  <Form onSubmit={handleSubmit}>
    <Input {...input}
      autoFocus={true}
      name="input"
    />

    <Actions>
      <Button
        color={Button.COLOR.SECONDARY}
        onClick={handleCancelClick}
      >
        Cancel
      </Button>

      <Button type="submit">
        Ok
      </Button>
    </Actions>
  </Form>
);

const mapStateToProps = state => ({
  input: state.services.modals.prompt.input
});

const mapDispatchToProps = dispatch => ({
  handleCancelClick: () => dispatch(closeModal('prompt'))
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'PromptForm'
})(PromptForm));
