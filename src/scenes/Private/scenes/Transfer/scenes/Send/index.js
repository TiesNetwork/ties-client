/** Actions **/
import { sendTransfer } from './actions';

/** Components **/
import Block from '../../../../../../components/Block';
import TransferSendForm from './components/Form';

const TransferSend = ({ address, handleSubmit, match, recipient }) => (
  <Block title="Make a transfer">
    {match.isExact && (
      <TransferSendForm
        initialValues={{
          address: address,
          recipient: recipient
        }}
        onSubmit={handleSubmit}
      />
    )}
  </Block>
);

const mapStateToProps = (state, { location }) => ({
  address: location.query.to,
  recipient: state.entities.users[location.query.to]
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(sendTransfer(values.address, values.sum))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferSend);
