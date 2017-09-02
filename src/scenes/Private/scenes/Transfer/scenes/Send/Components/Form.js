/** Components **/
import Button from '../../../../../../../components/Button';
import Form, { Actions, Group, Input, Select, Recipients } from '../../../../../../../components/Form';

const TransferForm = ({ handleSubmit, history, invalid, submitting }) => (
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
