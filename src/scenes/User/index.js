/** Components **/
import Avatar from '../../components/Avatar'
import Block from '../../components/Block'
import Button from '../../components/Button'

import UserContact from './components/Contact'
import UserProject from './components/Project'
import UserTag from './components/Tag'

class User extends Component {
  static propTypes = {
    isCurrentUser: PropTypes.bool,
    projects: PropTypes.arrayOf(
      PropTypes.shape(UserProject.propTypes)
    ),
    personal: PropTypes.shape({
      company: PropTypes.string,
      country: PropTypes.string,
      keywords: PropTypes.arrayOf(
        PropTypes.string
      ),
      name: PropTypes.string,
      photo: PropTypes.string,
      position: PropTypes.string,
      surname: PropTypes.string
    })
  }

  handlePersonalEditClick = () => this.props.history.push('/edit/personal')
  handleExperienceEditClick = () => this.props.history.push('/edit/experience')

  render() {
    const { personal, projects } = this.props

    return (
      <div>
        {personal && (
          <Block
            actions={this.props.isCurrentUser && <Button onClick={this.handlePersonalEditClick}>Edit</Button>}
            className={styles.UserPersonal}
            title="Personal Information"
          >
            <div className={styles.UserHeader}>
              <Avatar
                className={styles.UserAvatar}
                src={personal.photo}
              />

              <div className={styles.UserInfo}>
                <div className={styles.UserName}>
                  {personal.name} {personal.surname}
                </div>

                <div className={styles.UserPosition}>
                  {personal.company}, {personal.position}
                </div>

                <div className={styles.UserCountry}>
                  {personal.country}
                </div>
              </div>
            </div>

            {personal.keywords && personal.keywords.length > 0 && (
              <div className={styles.UserTags}>
                {personal.keywords.map((keyword, index) => (
                  <UserTag key={index} title={keyword} />
                ))}
              </div>
            )}
          </Block>
        )}

        <Block
          actions={this.props.isCurrentUser && <Button onClick={this.handleExperienceEditClick}>Edit</Button>}
          title="Experience"
        >
          {projects && projects.length > 0 &&projects.map(project => (
            <UserProject {...project} key={project.id} />
          ))}
        </Block>
      </div>
    )
  }
}

export default connect((state, ownProps) => {
  const user = state.entities.users[state.services.session.userId]

  return {
    isCurrentUser: state.services.session.userId === ownProps.match.params.userId,
    personal: { ...user },
    projects: (user.projects || []).map(projectId => state.entities.projects[projectId])
  }
})(User)
