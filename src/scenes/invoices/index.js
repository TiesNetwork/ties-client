import { Route } from 'react-router-dom'

import Link from '../../components/link'

import InvoicesItem from './components/invoices_item'
import InvoicesList from './components/invoices_list'

import InvoicesNew from './scenes/new'

class Invoices extends React.Component {
  render() {
    return (
      <div className="Invoices">
        <h3>Invoices</h3>

        <Route component={InvoicesNew} path="/invoices/new" />

        {this.props.match.isExact && (
          <div className="InvoicesActions">
            <Link to="/invoices/new">Create New Invoice</Link>
          </div>
        )}

        <InvoicesList title="Open Invoices (2)">
          <InvoicesItem
            description="Redesign App"
            status="Overdue: 2 days"
            total="25 BTC"
            user={{ fullName: 'John Doe' }}
          />

          <InvoicesItem
            description="Business trip to Cuba"
            status="Invoice Sent"
            total="100 BTC"
            user={{ fullName: 'Erik Lehnsherr' }}
          />
        </InvoicesList>

        <InvoicesList title="Closed Invoices (3)">
          <InvoicesItem
            description="Redesign App"
            status="Paid!"
            total="25 BTC"
            user={{ fullName: 'John Doe' }}
          />

          <InvoicesItem
            description="Business trip to Cuba"
            status="Paid!"
            total="100 BTC"
            user={{ fullName: 'Erik Lehnsherr' }}
          />

          <InvoicesItem
            description="Business trip to Cuba"
            status="Paid!"
            total="100 BTC"
            user={{ fullName: 'Erik Lehnsherr' }}
          />
        </InvoicesList>
      </div>
    )
  }
}

export default Invoices
