import { formValueSelector } from 'redux-form'

/** Components **/
import Avatar from '../../../../../components/Avatar'
import Button from '../../../../../components/Button'
import Form, { Actions, File, Group, Input, Tags } from '../../../../../components/Form'

class EditPersonalForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <div className={styles.EditPersonalFormAvatar}>
          <Avatar
            className={styles.EditPersonalFormAvatarPreview}
            src={this.props.photo}
          />

          <File
            accept="image/*"
            className={styles.EditPersonalFormAvatarControl}
            label="Upload photo"
            name="photo"
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
            disabled={this.props.invalid || this.props.submitting}
            type="submit"
          >
            Save
          </Button>
        </Actions>
      </Form>
    )
  }
}

const selector = formValueSelector('EditPersonalForm')
export default connect(state => ({
  photo: selector(state, 'photo')
}))(reduxForm({
  form: 'EditPersonalForm'
})(EditPersonalForm))
