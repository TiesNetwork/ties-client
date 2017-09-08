/** Actions **/
import { sendTransfer } from './actions';

/** Components **/
import Block from '../../../../../../components/Block';
import Form from './components/Form';

function TransferSend({ handleSubmit }) {
  return (
    <Block title="Make a Transfer">
      <Form onSubmit={handleSubmit}/>
    </Block>
  );
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(sendTransfer(
    values.address, values.currency, values.sum
  ))
});

export default connect(null, mapDispatchToProps)(TransferSend);

