/** Actions **/
import { fetchProjects } from './actions';

/** Components **/
import Block from '../../../../components/Block';
import Button from '../../../../components/Button';
import Project from './components/Project';

class UserExperience extends Component {
  componentDidMount() {
    const { fetchProjects, projects } = this.props;
    !projects && fetchProjects();
  }

  componentDidUpdate(prevProps) {
    const { address, fetchProjects, projects } = this.props;

    if (address != prevProps.address) {
      !projects && fetchProjects();
    }
  }

  render() {
    const { isCurrentUser, history, projects } = this.props;

    return (
      <Block
        actions={isCurrentUser && <Button onClick={() => history.push('/edit/experience')}>Edit</Button>}
        title="Experience"
      >
        {projects && projects.length > 0 && (
          <div>
            {projects.map(projectId => <Project id={projectId} key={projectId} />)}
          </div>
        )}
      </Block>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  projects: state.entities.users[match.params.address].projects
});
const mapDispatchToProps = (dispatch, { match }) => ({
  fetchProjects: () => dispatch(fetchProjects(match.params.address))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserExperience));
