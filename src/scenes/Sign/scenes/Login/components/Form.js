/** Components **/
import Button from '../../../../../components/Button';
import Form, { Actions, Input } from '../../../../../components/Form';

const SignLoginForm = ({ handleSubmit, invalid, submitting }) => (
  <Form
    className={styles.SignLoginForm}
    onSubmit={handleSubmit}
  >
    <Input label="Password" name="password" type="password" />

    <Actions>
      <Button
        className={styles.SignLoginFormButton}
        disabled={invalid || submitting}
        solid={true}
        type="submit"
      >
        Login
      </Button>
    </Actions>
  </Form>
);

const validate = values => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: 'SignLoginForm',
  validate
})(SignLoginForm);
