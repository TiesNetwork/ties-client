/** Actions **/
import { getInvoices } from './actions';

/** Components **/
import Invoice from './components/Item';

class SidebarInvoices extends Component {
  componentDidMount() {
    const { getInvoices } = this.props;

    getInvoices();
  }

  render() {
    const { invoices } = this.props;

    return (
      <div>
        <div className={styles.SidebarInvoicesContainer}>
          {invoices && invoices.length > 0 && (
            <div>
              {invoices.map(invoice => <Invoice {...invoice} key={invoice.id} />)}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invoices: state.scenes.containers.sidebar.containers.invoices.items.map(
    invoiceId => state.entities.invoices[invoiceId]
  ).sort((invoiceA, invoiceB) => invoiceA.date < invoiceB.date ? 1 : 0)
});
const mapDispatchToProps = dispatch => ({
  getInvoices: () => dispatch(getInvoices())
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarInvoices);
