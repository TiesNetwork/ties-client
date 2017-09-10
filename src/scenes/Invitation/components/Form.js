/** Components **/
import Button from '../../../components/Button';
import Form, { Actions } from '../../../components/Form';

function InvitationForm({ code, handleSubmit, history, invalid, submitting }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Actions>
        <Button
          color={Button.COLOR.SECONDARY}
          onClick={() => history.goBack()}
        >
          Close
        </Button>

        {!code && (
          <Button
            disabled={invalid || submitting}
            type="submit"
          >
            Generate
          </Button>
        )}
      </Actions>
    </Form>
  );
}

export default reduxForm({
  form: 'InvitationForm'
})(withRouter(InvitationForm));
