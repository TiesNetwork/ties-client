/** Components **/
import Button from '../../Button';
import Form, { Actions, Input } from '../../Form';

function PromptForm({ handleSubmit, input, onClose, submitting }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Input {...input}
         autoFocus={true}
         name="input"
      />

      <Actions>
        <Button
          color={Button.COLOR.SECONDARY}
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          disabled={submitting}
          type="submit"
        >
          Ok
        </Button>
      </Actions>
    </Form>
  );
}

const mapStateToProps = state => ({
  input: state.services.modals.prompt.input
});

export default connect(mapStateToProps)(reduxForm({
  form: 'PromptForm'
})(PromptForm));
