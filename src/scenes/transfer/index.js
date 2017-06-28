import Button from '../../components/button'
import Form, { Actions, Input, Select } from '../../components/form'

class Transfer extends React.Component {
  render() {
    return (
      <div>
        <h3>Transfer</h3>

        <Form>
          <Input label="Recipient:" name="recipient" readOnly value="John Doe"/>

          <Select label="Account:" name="account">
            <option value="1">TNC: 10000</option>
          </Select>

          <Input label="Total:" name="total"/>

          <Actions>
            <Button>Transfer</Button>
          </Actions>
        </Form>
      </div>
    )
  }
}

export default Transfer
