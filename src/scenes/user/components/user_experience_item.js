import Styles from './user_experience_item.scss'

class UserExperienceItem extends React.Component {
  render() {
    return (
      <div className="UserExperienceItem">
        <div className="UserExperienceItemHeader">
          <div className="UserExperienceItemTitle">
            Project name
          </div>

          <div className="UserExperienceItemPeriod">
            03.2014 - 01.2016
          </div>
        </div>

        <div className="UserExperienceItemDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </div>
      </div>
    )
  }
}

export default UserExperienceItem
