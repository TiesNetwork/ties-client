/** Components **/
import Button from '../../../../../../../components/Button';
import Form, { Actions, Group, Input, Select, Recipients } from '../../../../../../../components/Form';

function InvoiceCreateForm({
  handleSubmit,
  history,
  invalid,
  submitting
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Recipients label="Recipient:" name="recipient" />

      <Input label="Account Number" name="address" />

      <Group>
        <Select label="Account Currency" name="currency">
          <option value="TIE">TIE</option>
          <option value="ETH">ETH</option>
        </Select>

        <Input label="Sum" name="sum" />
      </Group>

      <Input label="Comment (optional)" name="comment" />

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
          Issue an Invoice
        </Button>
      </Actions>
    </Form>
  );
}

export default reduxForm({
  form: 'InvoiceCreateForm'
})(withRouter(InvoiceCreateForm));
