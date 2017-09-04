/** Components **/
import Button from '../../../../../../../components/Button';
import Form, { Actions, Group, Input, Select, Recipients } from '../../../../../../../components/Form';

function TransferForm({ handleSubmit, history, initialValues, invalid, submitting }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Recipients label="Recipient:" name="recipient" />

      <Input disabled label="Account Number" name="address" />

      <Group>
        <Select
          disabled={!!initialValues.invoice}
          label="Account Currency"
          name="currency"
        >
          <option value="TIE">TIE</option>
          <option value="ETH">ETH</option>
        </Select>

        <Input
          disabled={!!initialValues.invoice}
          label="Sum"
          name="amount"
        />
      </Group>

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
}

export default reduxForm({
  form: 'TransferForm'
})(withRouter(TransferForm));
