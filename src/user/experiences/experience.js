class UserExperience extends React.Component {
  render() {
    return (
      <div className="UserExperience">
        <div className="UserExperienceHeader">
          <div className="UserExperienceHeaderTitle">
            {this.props.title}
          </div>

          <div className="UserExperienceHeaderDate">
            {this.props.date}
          </div>
        </div>

        <div className="UserExperienceDescription">
          <div className="UserExperienceDescriptionHeader">
            Описание проекта
          </div>

          <div className="UserExperienceDescriptionContainer">
            {this.props.description}
          </div>
        </div>
      </div>
    )
  }
}

// @todo - remove test data
UserExperience.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

UserExperience.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default UserExperience
