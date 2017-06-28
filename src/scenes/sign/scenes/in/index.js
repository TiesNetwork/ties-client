import Button from '../../../../components/button'
import Form, { Actions, Input } from '../../../../components/form'
import Link from '../../../../components/link'

class SignIn extends React.Component {
  render() {
    return (
      <div className="SignIn">
        <h3>Ties.Network</h3>

        <div>
          Crypto-community Business Platform
        </div>
        <div>
          Search of business partners | Business transactions in the crypto currency
        </div>
        <div>
          Due diligence ICO
        </div>

        <br/>
        <br/>

        <div>
          Recovery access to the ETH-wallet
        </div>

        <Form>
          <Input label="Enter recovery phrase" name="phrase" />

          <Actions>
            <Link to="/sign/up">Create new ETH-wallet</Link>&nbsp;
            <Button>Recovery ETH-wallet</Button>
          </Actions>
        </Form>
      </div>
    )
  }
}

export default SignIn
