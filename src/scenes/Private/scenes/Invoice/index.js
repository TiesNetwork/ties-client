/** Scenes **/
import InvoiceCreate from './scenes/Create';

function Invoice({ match }) {
  return (
    <Switch>
      <Route component={InvoiceCreate} path={`${match.url}/create`} />
    </Switch>
  );
}

export default Invoice;
