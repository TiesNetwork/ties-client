import Button from '../../../../../components/Button'
import Form, { Actions, Checkbox, Input } from '../../../../../components/Form'

class SignRecoverForm extends Component {
  render() {
    return (
      <Form
        className={styles.SignRecoverForm}
        onSubmit={this.props.handleSubmit}
      >
        <Input
          label="Recovery phrase or hex-encoded private key"
          name="phrase"
        />

        <div className={styles.SignRecoverFormProtect}>
          Protect your wallet with a password<br />
          Please use strong password <i>(min 8 characters)</i>
        </div>

        <Input
          label="Password"
          name="password"
          type="password"
        />

        <Input
          label="Confirm Password"
          name="passwordConfirm"
          type="password"
        />

        <Checkbox
          label="I agree with the platform terms"
          name="terms"
        />

        <Actions>
          <Button color={Button.color.SECONDARY}>
            Back
          </Button>

          <Button className={styles.SignRecoverFormButton} solid>
            Recover
          </Button>
        </Actions>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'SignRecoverForm'
})(SignRecoverForm)
