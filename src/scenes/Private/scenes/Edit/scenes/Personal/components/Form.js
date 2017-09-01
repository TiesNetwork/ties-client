import { formValueSelector } from 'redux-form';

/** Components **/
import Avatar from '../../../../../../../components/Avatar';
import Button from '../../../../../../../components/Button';
import Form, { Actions, File, Group, Input, Tags } from '../../../../../../../components/Form';

const EditPersonalForm = ({ handleSubmit, invalid, photo, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className={styles.EditPersonalFormAvatar}>
      <Avatar
        className={styles.EditPersonalFormAvatarPreview}
        src={photo}
      />

      <File
        accept="image/*"
        className={styles.EditPersonalFormAvatarControl}
        converter={File.CONVERTER.HEX}
        label="Upload photo"
        name="photo"
        toBuffer={true}
      />
    </div>

    <Group>
      <Input label="Name" name="name" />
      <Input label="Surname" name="surname" />
    </Group>

    <Group>
      <Input label="Company" name="company" />
      <Input label="Position" name="position" />
    </Group>

    <Input label="Country" name="country" />

    <Tags label="Keywords" name="keywords" />

    <Actions>
      <Button
        disabled={invalid || submitting}
        type="submit"
      >
        Save
      </Button>
    </Actions>
  </Form>
);

const selector = formValueSelector('EditPersonalForm');
const mapStateToProps = state => ({
  photo: selector(state, 'photo')
});

const validate = values => {
  const errors = {};
  const required = ['name', 'surname'];

  required.forEach(name => {
    if (!values[name]) {
      errors[name] = 'Required!';
    }
  });

  return errors;
};

export default connect(mapStateToProps)(reduxForm({
  form: 'EditPersonalForm',
  validate
})(EditPersonalForm));
