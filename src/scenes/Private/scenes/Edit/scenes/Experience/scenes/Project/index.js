/** Actions **/
import { updateProject } from './actions'

/** Components **/
import Block from '../../../../../../components/Block'
import EditExperienceForm from '../../components/Form'

class EditExperienceProject extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    project: PropTypes.shape({
      dateEnd: PropTypes.string,
      dateStart: PropTypes.string,
      description: PropTypes.string,
      name: PropTypes.string
    })
  }

  render() {
    return (
      <Block title={this.props.project.name}>
        <EditExperienceForm
          initialValues={this.props.project}
          onSubmit={this.props.handleSubmit}
        />
      </Block>
    )
  }
}

export default connect(
  (state, ownProps) => ({ project: state.entities.projects[ownProps.match.params.projectId] }),
  dispatch => ({
    handleSubmit: values => dispatch(updateProject(values.__address, values.id, values))
  })
)(EditExperienceProject)
