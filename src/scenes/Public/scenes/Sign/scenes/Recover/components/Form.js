/** Components **/
import Button from '../../../../../../../components/Button';
import Form, { Actions, Checkbox, Input } from '../../../../../../../components/Form';

const SignRecoverForm = ({ handleSubmit, invalid, submitting }) => (
  <Form
    className={styles.SignRecoverForm}
    onSubmit={handleSubmit}
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
      <Button
        className={styles.SignRecoverFormButton}
        disabled={invalid || submitting}
        solid={true}
        type="submit"
      >
        Recover
      </Button>
    </Actions>
  </Form>
)

const validate = values => {
  const errors = {};
  const required = ['phrase', 'password', 'passwordConfirm'];

  required.map(key => {
    if (!values[key]) {
      errors[key] = 'Required';
    }
  });

  if (values.password != values.passwordConfirm) {
    errors.passwordConfirm = 'Password do not match';
  }

  return errors;
};

export default reduxForm({
  form: 'SignRecoverForm',
  validate
})(SignRecoverForm);
