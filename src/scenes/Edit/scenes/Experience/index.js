import { Switch } from 'react-router-dom'

/** Actions **/
import { deleteProject } from './actions'

/** Components **/
import Block from '../../../../components/Block'
import Button from '../../../../components/Button'
import EditExperienceForm from './components/Form'
import EditExperienceItem from './components/Item'

/** Scenes **/
import EditExperienceCreate from './scenes/Create'
import EditExperienceProject from './scenes/Project'

class EditExperience extends Component {
  static propTypes = {
    handleRemove: PropTypes.func,
    projects: PropTypes.arrayOf(
      PropTypes.shape(EditExperienceItem.propTypes)
    )
  }

  handleCreateClick = () => this.props.history.push(`${this.props.match.url}/create`)
  handleEdit = id => this.props.history.push(`/edit/experience/${id}`)

  render() {
    return (
      <div>
        <Switch>
          <Route component={EditExperienceCreate} path={`${this.props.match.url}/create`} />
          <Route component={EditExperienceProject} path={`${this.props.match.url}/:projectId`} />
        </Switch>

        {this.props.match.isExact && (
          <Block
            actions={<Button onClick={this.handleCreateClick}>Create</Button>}
            title="Experience"
          >
            {this.props.projects && this.props.projects.length > 0 && (
              <div>
                {this.props.projects.map(project => (
                  <EditExperienceItem {...project}
                    key={project.id}
                    onEdit={this.handleEdit}
                    onRemove={this.props.handleRemove}
                  />
                ))}
              </div>
            )}
          </Block>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    projects: (state.entities.users[state.services.session.userId].projects || []).map(projectId => state.entities.projects[projectId])
  }),
  dispatch => ({
    handleRemove: (address, id) => dispatch(deleteProject(address, id))
  })
)(EditExperience)
