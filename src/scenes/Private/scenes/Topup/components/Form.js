import Button from '../../../../../components/Button';
import Form, { Actions, Input } from '../../../../../components/Form';

function TopupForm({ handleSubmit, history, invalid, submitting}) {
  return (
    <Form
      className={styles.TopupForm}
      onSubmit={handleSubmit}
    >
      <Input label="Invitation code" name="code" />

      <Actions className={styles.TopupFormActions}>
        <Button
          color={Button.COLOR.SECONDARY}
          onClick={() => history.goBack()}
        >
          Close
        </Button>

        <Button
          disabled={invalid || submitting}
          type="submit"
        >
          Topup by invitation
        </Button>
      </Actions>
    </Form>
  );
}

export default reduxForm({
  form: 'TopupForm'
})(withRouter(TopupForm));
