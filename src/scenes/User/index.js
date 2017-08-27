/** Actions **/
import { getProjects } from './actions';

/** Components **/
import Block from '../../components/Block';
import Button from '../../components/Button';
import Personal from '../../components/Personal';
import Tag from '../../components/Tag';

import UserProject from './components/Project';

class User extends Component {
  static propTypes = {
    id: PropTypes.string,
    isCurrentUser: PropTypes.bool,
    projects: PropTypes.arrayOf(PropTypes.shape(UserProject.propTypes)),
    personal: PropTypes.shape(Personal.propTypes)
  }

  componentDidMount() {
    this.props.getProjects();
  }

  handlePersonalEditClick = () => this.props.history.push('/edit/personal')
  handleExperienceCreateClick = () => this.props.history.push('/edit/experience/create')
  handleExperienceEditClick = () => this.props.history.push('/edit/experience')
  handleTransferClick = () => this.props.history.push({
    pathname: '/transfer',
    query: { to: this.props.id }
  })

  render() {
    const { personal, projects } = this.props;

    return (
      <div>
        {personal ? (
          <Block
            actions={this.props.isCurrentUser && <Button onClick={this.handlePersonalEditClick}>Edit</Button>}
            className={styles.UserPersonal}
            title="Personal Information"
          >
            <Personal {...personal} />

            {personal.keywords && personal.keywords.length > 0 && (
              <div className={styles.UserTags}>
                {personal.keywords.map((keyword, index) => (
                  <Tag
                    className={styles.UserTag}
                    key={index}
                    title={keyword}
                  />
                ))}
              </div>
            )}

            {!this.props.isCurrentUser && (
              <div className={styles.UserActions}>
                <Button onClick={this.handleTransferClick}>
                  Transfer
                </Button>
              </div>
            )}
          </Block>
        ) : (
          <Block title="Fill your profile">
            <Button onClick={this.handlePersonalEditClick}>Edit profile</Button>
          </Block>
        )}


        {personal && (
          projects && projects.length > 0 ? (
            <Block
              actions={this.props.isCurrentUser && <Button onClick={this.handleExperienceEditClick}>Edit</Button>}
              title="Experience"
            >
              {projects.map(project => <UserProject {...project} key={project.id} />)}
            </Block>
          ) : (
            <Block title="Add your first project">
              <Button onClick={this.handleExperienceCreateClick}>Add</Button>
            </Block>
          )
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId];

  return {
    id: ownProps.match.params.userId,
    isCurrentUser: state.services.session.userId === ownProps.match.params.userId,
    personal: { ...user },
    projects: user ? (user.projects || []).map(projectId => state.entities.projects[projectId]) : null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getProjects: () => dispatch(getProjects(ownProps.match.params.userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
