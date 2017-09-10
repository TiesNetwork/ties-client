/** Actions **/
import { createInvoice } from './actions';

/** Components **/
import Block from '../../components/Block';
import Form from './components/Form';

function Invoice({ handleSubmit }) {
  return (
    <Block title="Issue a Invoice">
      <Form onSubmit={handleSubmit} />
    </Block>
  );
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(createInvoice(values))
});

export default connect(null, mapDispatchToProps)(Invoice);
