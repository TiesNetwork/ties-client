/** Actions **/
import { createProject } from './actions'

/** Components **/
import Block from '../../../../../../components/Block'
import EditExperienceForm from '../../components/Form'

class EditExperienceCreate extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  }

  render() {
    return (
      <Block title="Create">
        <EditExperienceForm onSubmit={this.props.handleSubmit} />
      </Block>
    )
  }
}

export default connect(null, dispatch => ({
  handleSubmit: values => dispatch(createProject(values))
}))(EditExperienceCreate)
