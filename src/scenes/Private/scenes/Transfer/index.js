/** Components **/
import Block from '../../../../components/Block';
import TransferForm from './components/Form';

const Transfer = ({ handleSubmit, recipient }) => (
  <div>
    <Block title="Make a transfer">
      <TransferForm
        initialValues={{
          address: recipient && recipient.__address,
          recipient: recipient
        }}
        onSubmit={handleSubmit}
      />
    </Block>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  recipient: state.entities.users[ownProps.location.query.to]
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(sendTransfer(values.address, values.sum))
});

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
