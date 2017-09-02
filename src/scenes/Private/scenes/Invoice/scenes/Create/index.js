/** Actions **/
import { createInvoice } from './actions';

/** Components **/
import Block from '../../../../../../components/Block';
import Form from './components/Form';

function InvoiceCreate({
  address,
  handleSubmit,
  recipient
}) {
  return (
    <Block title="Issue an Invoice">
      <Form
        initialValues={{
          address, recipient,
          currency: 'TIE'
        }}
        onSubmit={handleSubmit} />
    </Block>
  );
}

const mapStateToProps = (state, { location }) => ({
  address: location.query.to,
  recipient: state.entities.users[location.query.to]
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(createInvoice(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceCreate);
