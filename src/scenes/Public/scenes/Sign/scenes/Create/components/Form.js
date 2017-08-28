import Button from '../../../../../../../components/Button';
import Form, { Actions, Checkbox, Input } from '../../../../../../../components/Form';

const SignCreateForm = ({ handleSubmit, invalid, submitting }) => (
  <Form
    className={styles.SignCreateForm}
    onSubmit={handleSubmit}
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
      <Button
        disabled={invalid || submitting}
        solid={true}
        type="submit"
      >
        Create your wallet
      </Button>
    </Actions>
  </Form>
);

const validate = values => {
  const errors = {};
  const required = ['password', 'passwordConfirm'];

  required.map(key => {
    if (!values[key]) {
      errors[key] = 'Required';
    }
  });

  if (values.password != values.passwordConfirm) {
    errors.passwordConfirm = 'Password do not match';
  }

  return errors;
}

export default reduxForm({
  form: 'SignCreateForm',
  validate
})(SignCreateForm);
