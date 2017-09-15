/** Components **/
import Button from '../../../../../components/Button';
import Form, { Actions, Group, Input, Select, Recipients } from '../../../../../components/Form';

function TransferSendForm({ initialValues, handleSubmit, history, submitting }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Recipients label="Recipients:" name="recipient" />

      <Input disabled label="Account Number" name="address" />

      <Group>
        <Select disabled={!!initialValues.invoice} label="Account Currency" name="currency">
          <option>TIE</option>
          <option>ETH</option>
        </Select>

        <Input disabled={!!initialValues.invoice} label="Sum" name="sum" />
      </Group>

      <Actions>
        <Button
          color={Button.COLOR.SECONDARY}
          disabled={submitting}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>

        <Button
          disabled={submitting}
          type="submit"
        >
          Send
        </Button>
      </Actions>
    </Form>
  );
}

const mapStateToProps = (state, { location }) => {
  if (location.query) {
    const invoice = state.entities.invoices[location.query.invoice];
    const user = state.entities.users[invoice ? invoice.address : location.query.to];

    return {
      initialValues: {
        address: user.address,
        currency: invoice && invoice.currency || 'TIE',
        invoice: invoice && invoice.id,
        sum: invoice && invoice.sum,
        recipient: user
      }
    }
  }

  return {};
};

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'TransferSendForm'
})(TransferSendForm)));
