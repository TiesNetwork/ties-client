import { withRouter } from 'react-router-dom';

/** Components **/
import Button from '../../../../../../../components/Button';
import Form, { Actions, Group, Input } from '../../../../../../../components/Form';

const EditExperienceForm = ({ handleSubmit, history, initialValues }) => (
  <Form onSubmit={handleSubmit}>
    <Input label="Project name" name="name" />

    <Group>
      <Input label="From" name="dateStart" />
      <Input label="To" name="dateEnd" />
    </Group>

    <Input label="Description" name="description" />

    <Actions>
      <Button
        color={Button.color.SECONDARY}
        onClick={() => history.push('/private/edit/experience')}
      >
        Cancel
      </Button>

      <Button type="submit">
        {initialValues ? 'Save' : 'Create'}
      </Button>
    </Actions>
  </Form>
);

const validate = values => {
  const errors = {};
  const dateFields = ['dateEnd', 'dateStart'];
  const required = ['dateEnd', 'dateStart', 'description', 'name'];

  required.forEach(name => {
    if (!values[name]) {
      errors[name] = 'Required!';
    }
  });

  dateFields.forEach(name => {
    if (!!values[name] && !moment(values[name], 'YYYY-MM-DD', true).isValid()) {
      errors[name] = 'Date is not valid! Format: YYYY-MM-DD';
    }
  });

  return errors;
};

export default reduxForm({
  form: 'EditExperienceForm',
  validate
})(withRouter(EditExperienceForm));
