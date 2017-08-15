import { withRouter } from 'react-router-dom'

/** Components **/
import Button from '../../../../../components/Button'
import Form, { Actions, Group, Input, Tags } from '../../../../../components/Form'

class EditExperienceForm extends Component {
  handleCloseClick = () => this.props.history.push('/edit/experience')

  render() {
    console.log(this.props)
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Input label="Project name" name="name" />

        <Group>
          <Input label="From" name="dateStart" />
          <Input label="To" name="dateEnd" />
        </Group>

        <Input label="Description" name="description" />

        <Actions>
          <Button
            color={Button.color.SECONDARY}
            onClick={this.handleCloseClick}
          >
            Cancel
          </Button>

          <Button type="submit">
            {this.props.initialValues ? 'Save' : 'Create'}
          </Button>
        </Actions>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'EditExperienceForm'
})(withRouter(EditExperienceForm))
