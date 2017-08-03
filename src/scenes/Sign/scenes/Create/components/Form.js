import Button from '../../../../../components/Button'
import Form, { Actions, Checkbox, Input } from '../../../../../components/Form'

class SignCreateForm extends Component {
  render() {
    return (
      <Form
        className={styles.SignCreateForm}
        onSubmit={this.props.handleSubmit}
      >
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
          <Button solid type="submit">
            Create your wallet
          </Button>
        </Actions>
      </Form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.password) {
    errors.password = 'Required'
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required'
  }

  return errors
}

export default reduxForm({
  form: 'SignCreateForm',
  validate
})(SignCreateForm)
