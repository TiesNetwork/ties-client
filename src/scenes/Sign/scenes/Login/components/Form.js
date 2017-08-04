import Button from '../../../../../components/Button'
import Form, { Actions, Input } from '../../../../../components/Form'

class SignLoginForm extends Component {
  render() {
    return (
      <Form
        className={styles.SignLoginForm}
        onSubmit={this.props.handleSubmit}
      >
        <Input label="Password" name="password" type="password" />

        <Actions>
          <Button
            className={styles.SignLoginFormButton}
            disabled={this.props.invalid || this.props.submitting}
            solid={true}
            type="submit"
          >
            Login
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

  return errors
}

export default reduxForm({
  form: 'SignLoginForm',
  validate
})(SignLoginForm)
