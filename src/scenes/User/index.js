import Avatar from '../../components/Avatar'
import Block from '../../components/Block'

import UserContact from './components/Contact'
import UserProject from './components/Project'
import UserTag from './components/Tag'

class User extends Component {
  static propTypes = {
    contacts: PropTypes.array,
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

  render() {
    const { contacts, personal, projects } = this.props

    return (
      <div>
        {personal && (
          <Block
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

        {projects && projects.length > 0 && (
          <Block title="Experience">
            {projects.map(project => (
              <UserProject {...project} key={project.id} />
            ))}
          </Block>
        )}

        {contacts && contacts.length > 0 && (
          <Block title="Contacts">
            <div className={styles.UserContacts}>
              {contacts.map((contact, index) => (
                <UserContact {...contact} key={index} />
              ))}
            </div>
          </Block>
        )}
      </div>
    )
  }
}

export default connect(state => {
  const user = state.entities.users[state.services.session.userId]

  return {
    contacts: (user.contacts || []).map(userId => state.entities.users[userId]),
    personal: { ...user },
    projects: (user.projects || []).map(projectId => state.entities.projects[projectId])
  }
})(User)
