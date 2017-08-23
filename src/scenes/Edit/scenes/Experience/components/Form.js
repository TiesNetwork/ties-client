import { withRouter } from 'react-router-dom'

/** Components **/
import Button from '../../../../../components/Button'
import Form, { Actions, Group, Input } from '../../../../../components/Form'

class EditExperienceForm extends Component {
  handleCloseClick = () => this.props.history.push('/edit/experience')

  render() {
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

const validate = values => {
  const errors = {}
      , dateFields = ['dateEnd', 'dateStart']
      , required = ['dateEnd', 'dateStart', 'description', 'name']

  required.forEach(name => {
    if (!values[name]) {
      errors[name] = 'Required!'
    }
  })

  dateFields.forEach(name => {
    if (!!values[name] && !moment(values[name], 'YYYY-MM-DD', true).isValid()) {
      errors[name] = 'Date is not valid! Format: YYYY-MM-DD'
    }
  })

  return errors
}

export default reduxForm({
  form: 'EditExperienceForm',
  validate
})(withRouter(EditExperienceForm))
