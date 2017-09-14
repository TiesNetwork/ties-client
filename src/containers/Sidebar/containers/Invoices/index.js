/** Actions **/
import { fetchInvoices } from './actions';

/** Components **/
import Invoice from './components/Item';

class SidebarInvoices extends Component {
  componentDidMount() {
    const { fetchInvoices } = this.props;
    fetchInvoices();
  }

  render() {
    const { invoices } = this.props;

    return (
      <div>
        {invoices && invoices.length > 0 && (
          <div className={styles.SidebarInvoicesContainer}>
            {invoices.map((invoice, index) => (
              <Invoice {...invoice}
                key={invoice.id}
                number={invoices.length - index}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  invoices: _.values(state.entities.invoices).sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0)
});
const mapDispatchToProps = dispatch => ({
  fetchInvoices: () => dispatch(fetchInvoices())
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarInvoices);
