import { Input } from '../../../../../../components/form'

class SignUpRecovery extends React.Component {
  render() {
    return (
      <div className="SignUpRecovery">
        <h3>Account recovery information</h3>

        <Input
          label="Address:"
          name="phrase"
          readOnly
          style={{ width: 230 }}
          value="4c9184f37cff01bcdc32dc486ec36961"
        />

        <Input
          label="Owner recovery phrase"
          name="phrase"
          readOnly
          style={{ width: 600 }}
          value="green fame proofing devoutly essay renewed tripping carwash spent swell rematch grub"
        />

        <br/>

        <div>
          (keep private and secure, it allows full and unlimited access to the account)
        </div>
      </div>
    )
  }
}

export default SignUpRecovery
