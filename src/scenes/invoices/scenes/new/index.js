import Button from '../../../../components/button'
import Form, { Actions, Input, Select, Textarea } from '../../../../components/form'
import Link from '../../../../components/link'

import Styles from './styles.scss'

class InvoicesNew extends React.Component {
  render() {
    return (
      <div className={Styles.InvoicesNew}>
        <h1>Create new invoice:</h1>

        <Form className="InvoicesNewForm">
          <Input
            label="Payer:"
            name="total"
            readOnly
            value="John Doe"
          />

          <Select label="Currency" name="currency">
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
          </Select>

          <Input
            label="Total:"
            name="total"
          />

          <Textarea
            label="Comment:"
            name="comment"
          />

          <Actions>
            <Link to="/invoices">Cancel</Link>
            <Button>Create Invoice</Button>
          </Actions>
        </Form>
      </div>
    )
  }
}

export default InvoicesNew
