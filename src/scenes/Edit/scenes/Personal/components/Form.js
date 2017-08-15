import Avatar from '../../../../../components/Avatar'
import Button from '../../../../../components/Button'
import Form, { Actions, Group, Input, Tags } from '../../../../../components/Form'

class EditPersonalForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Avatar
          className={styles.EditPersonalFormAvatar}
          src={this.props.initialValues.photo}
        />

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

export default reduxForm({
  form: 'EditPersonalForm'
})(EditPersonalForm)
