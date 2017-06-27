import Avatar from './common/avatar'
import Button from './common/button'

import UserExperience from './user/experiences/experience'

import Style from './user.scss'

class User extends React.Component {
  render() {
    return (
      <div className={Style.User}>
        <div className={Style.UserHeader}>
          <Avatar className="UserHeaderAvatar" />

          <div className={Style.UserHeaderInfo}>
            <div className="UserHeaderInfoFullName">
              John Doe
            </div>

            <div className="UserHeaderInfoLocation">
              Moscow, Russia
            </div>

            <div className="UserHeaderInfoStatus">
              Открыт для сотрудничества
            </div>
          </div>

          <div className={Style.UserHeaderActions}>
            <Button className={Style.UserHeaderAction}>
              Добавить в друзья
            </Button>

            <Button className={Style.UserHeaderAction}>
              Трансфер
            </Button>
          </div>
        </div>

        <div className={Style.UserExperiences}>
          <div className="UserExperiencesHeader">
            Опыт работы в других проектах
          </div>

          <div className="UserExperiencesContainer">
            <UserExperience date="02.2016 - настоящее время" title="Super cool project #1" />
            <UserExperience date="03.2014 - 01.2016" title="Super cool project #2" />
          </div>

          <div className="UserExperiencesActions">
            <Button>Добавить опыт</Button>
          </div>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    location: PropTypes.string
  })
}

export default User
