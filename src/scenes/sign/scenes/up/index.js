import { Route } from 'react-router-dom'

import Button from '../../../../components/button'
import Form, { Actions, Input } from '../../../../components/form'

import SignUpRecovery from './scenes/recovery'

class SignUp extends React.Component {
  render() {
    return (
      <div className="SignUp">
        {this.props.match.isExact && (
          <div>
            <h3>Create new ETH-wallet</h3>

            <div>
              Your ETH-wallet is your Ties.Network account.<br/>
              Public and private key will be generated automatically
            </div>

            <br/>

            <div>
              Enter the password for accessing the private key:
            </div>

            <Form>
              <Input label="Password" name="password" />
              <Input label="Confirm password" name="password_confirm" />

              <Actions>
                <Button>Create ETH-wallet</Button>
              </Actions>
            </Form>
          </div>
        )}

        <Route component={SignUpRecovery} path="/sign/up/recovery"/>
      </div>
    )
  }
}

export default SignUp
