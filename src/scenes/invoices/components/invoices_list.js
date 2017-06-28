import Styles from './invoices_list.scss'

class InvoicesList extends React.Component {
  render() {
    return (
      <div className={Styles.InvoicesList}>
        <div className={Styles.InvoicesListHeader}>
          <div className={Styles.InvoicesListTitle}>
            {this.props.title}
          </div>
        </div>

        <div className={Styles.InvoicesListContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

InvoicesList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default InvoicesList
