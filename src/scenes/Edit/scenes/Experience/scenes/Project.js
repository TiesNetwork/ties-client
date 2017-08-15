/** Components **/
import Block from '../../../../../components/Block'
import EditExperienceForm from '../components/Form'

class EditExperienceProject extends Component {
  static propTypes = {
    dateEnd: PropTypes.string,
    dateStart: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string
  }

  render() {
    return (
      <Block title={this.props.name}>
        <EditExperienceForm initialValues={this.props} />
      </Block>
    )
  }
}

export default connect((state, ownProps) => ({
  ...state.entities.projects[ownProps.match.params.projectId]
}))(EditExperienceProject)
