/** Actions **/
import { sendTransfer } from './actions';

/** Components **/
import Block from '../../../../../../components/Block';
import TransferSendForm from './components/Form';

function TransferSend({ handleSubmit, invoice, recipient }) {
  return (
    <Block title="Make a transfer">
      <TransferSendForm
        initialValues={{
          amount: invoice && invoice.amount,
          address: recipient.address,
          currency: invoice && invoice.currency || 'TIE',
          invoice: invoice,
          recipient: recipient
        }}
        onSubmit={handleSubmit}
      />
    </Block>
  );
}

const mapStateToProps = (state, { location, match }) => ({
  invoice: location.query && location.query.invoice && state.entities.invoices[location.query.invoice],
  recipient: state.entities.users[match.params.userAddress]
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(sendTransfer(values.address, values.amount, values.invoice && values.invoice.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferSend);
