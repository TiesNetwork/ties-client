/** Actions **/
import { sendTransfer } from './actions';

/** Components **/
import Block from '../../../../components/Block';
import TransferForm from './components/Form';

const Transfer = ({ handleSubmit, recipient }) => (
  <Block title="Make a transfer">
    <TransferForm
      initialValues={{
        address: recipient && recipient.__address,
        recipient: recipient
      }}
      onSubmit={handleSubmit}
    />
  </Block>
);

const mapStateToProps = (state, { location }) => ({
  recipient: state.entities.users[location.query.to]
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(sendTransfer(values.address, values.sum))
});

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
