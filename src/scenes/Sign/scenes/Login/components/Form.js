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
          <Button className={styles.SignLoginFormButton} solid>
            Login
          </Button>
        </Actions>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'LoginForm'
})(SignLoginForm)
