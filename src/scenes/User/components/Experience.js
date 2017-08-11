class UserExperience extends Component {
  static propTypes = {
    date: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    return (
      <div className={styles.UserExperience}>
        <div className={styles.UserExperienceHeader}>
          <div className={styles.UserExperienceLogo} />

          <div className={styles.UserExperienceInfo}>
            {this.props.title && (
              <div className={styles.UserExperienceTitle}>
                {this.props.title}
              </div>
            )}

            {this.props.date && (
              <div className={styles.UserExperienceDate}>
                {this.props.date}
              </div>
            )}
          </div>
        </div>

        <div className={styles.UserExperienceContainer}>
          {this.props.description}
        </div>
      </div>
    )
  }
}

export default UserExperience
