/** Components **/
import Button from '../../../../../components/Button';
import Form, { Actions, Input, Recipients } from '../../../../../components/Form';

const TransferForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Recipients label="Recipient:" name="recipient" />

    <Input label="Account Number" name="address" />
    <Input label="Sum" name="sum" />

    <Actions>
      <Button type="submit">
        Send
      </Button>
    </Actions>
  </Form>
);

export default reduxForm({
  form: 'TransferForm'
})(TransferForm);
