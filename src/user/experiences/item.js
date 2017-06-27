class UserExperiencesItem extends React.Component {
  render() {
    return (
      <div className="UserExperiencesItem">
        <div className="UserExperiencesItemHeader">
          <div className="UserExperiencesItemHeaderTitle">
            {this.props.title}
          </div>

          <div className="UserExperiencesItemHeaderDate">
            {this.props.date}
          </div>
        </div>

        <div className="UserExperiencesItemDescription">
          <div className="UserExperiencesItemDescriptionHeader">
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
UserExperiencesItem.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

UserExperiencesItem.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
}

export default UserExperiencesItem
