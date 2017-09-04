/** Containers **/
import Invoices from './containers/Invoices';

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.Sidebar}>
        <Invoices />
      </div>
    );
  }
}

export default Sidebar;
