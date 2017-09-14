/** Components **/
import Button from '../../../components/Button';
import Form, { Actions, Group, Input, Select, Recipients } from '../../../components/Form';

function InvoiceForm({ invalid, handleSubmit, history, submitting }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Recipients label="Recipients:" name="recipient" />

      <Input disabled label="Account Number" name="address" />

      <Group>
        <Select label="Account Currency" name="currency">
          <option>TIE</option>
          <option>ETH</option>
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
          Send
        </Button>
      </Actions>
    </Form>
  );
}

const mapStateToProps = (state, { location }) => {
  if (location.query) {
    const user = state.entities.users[location.query.to];

    return {
      initialValues: {
        address: user.address,
        currency: 'TIE',
        recipient: user
      }
    }
  }

  return {};
};

export default withRouter(connect(mapStateToProps)(reduxForm({
  form: 'InvoiceForm'
})(InvoiceForm)));
