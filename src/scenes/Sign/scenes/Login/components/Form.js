import Form, { Actions, Input } from '../../../../../components/Form'

class SignLoginForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Input label="password" name="password" type="password" />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'LoginForm'
})(SignLoginForm)
