import Button from '../../../../../components/Button'
import Form, { Actions, Input } from '../../../../../components/Form'

class SignCreateForm extends Component {
  render() {
    return (
      <Form
        className={styles.SignCreateForm}
        onSubmit={this.props.handleSubmit}
      >
        <div className={styles.SignCreateFormProtect}>
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

        <Actions>
          <Button color={Button.color.SECONDARY}>
            Back
          </Button>

          <Button solid>
            Create your wallet
          </Button>
        </Actions>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'SignCreateForm'
})(SignCreateForm)
