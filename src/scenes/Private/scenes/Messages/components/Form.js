/** Components **/
import Button from '../../../../../components/Button';
import Form, { Actions, Input } from '../../../../../components/Form';

function MessagesForm({ handleSubmit }) {
  return (
    <Form
      className={styles.MessagesForm}
      onSubmit={handleSubmit}
    >
      <Input
        className={styles.MessagesFormInput}
        name="message"
        placeholder="Write a message"
      />

      <Actions className={styles.MessagesFormActions}>
        <Button>
          Send
        </Button>
      </Actions>
    </Form>
  );
}

export default reduxForm({
  form: 'MessagesForm'
})(MessagesForm);
