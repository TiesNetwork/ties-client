import Avatar from '../../components/avatar'
import Button from '../../components/button'

import UserExperienceItem from './components/user_experience_item'

import Styles from './styles.scss'

class User extends React.Component {
  render() {
    return (
      <div className={Styles.User}>
        <div className={Styles.UserHeader}>
          <Avatar />

          <div className={Styles.UserHeaderInfo}>
            <div>John Doe</div>
            <div>Moscow, Russia</div>
            <div>Front-end Developer</div>
          </div>

          <div className={Styles.UserHeaderActions}>
            <Button className={Styles.UserHeaderAction}>
              Add to friends
            </Button>

            <Button className={Styles.UserHeaderAction}>
              Transfer
            </Button>
          </div>
        </div>

        <div>
          <h3>User Experience</h3>

          <div>
            <UserExperienceItem />
            <UserExperienceItem />
            <UserExperienceItem />
          </div>
        </div>
      </div>
    )
  }
}

export default User
