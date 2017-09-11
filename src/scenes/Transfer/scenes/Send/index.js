/** Actions **/
import { sendTransfer } from './actions';

/** Components **/
import Block from '../../../../components/Block';
import Form from './components/Form';

function TransferSend({ handleSubmit }) {
  return (
    <Block title="Make a Transfer">
      <Form onSubmit={handleSubmit}/>
    </Block>
  );
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(sendTransfer(values))
});

export default connect(null, mapDispatchToProps)(TransferSend);

