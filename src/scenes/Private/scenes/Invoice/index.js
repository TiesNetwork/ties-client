/** Scenes **/
import InvoiceCreate from './scenes/Create';
import InvoiceStatus from './scenes/Status';

function Invoice({ match }) {
  return (
    <Switch>
      <Route component={InvoiceCreate} path={`${match.url}/create`} />
      <Route component={InvoiceCreate} path={`${match.url}/:invoiceId`} />
    </Switch>
  );
}

export default Invoice;
