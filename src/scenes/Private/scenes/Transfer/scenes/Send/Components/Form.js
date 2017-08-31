/** Components **/
import Button from '../../../../../../../components/Button';
import Form, { Actions, Input, Recipients } from '../../../../../../../components/Form';

const TransferForm = ({ handleSubmit, history, invalid, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Recipients label="Recipient:" name="recipient" />

    <Input label="Account Number" name="address" />
    <Input label="Sum" name="sum" />

    <Actions>
      <Button
        color={Button.COLOR.SECONDARY}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>

      <Button
        disabled={invalid || submitting}
        type="submit"
      >
        Send
      </Button>
    </Actions>
  </Form>
);

export default reduxForm({
  form: 'TransferForm'
})(withRouter(TransferForm));
