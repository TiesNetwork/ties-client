class UserProject extends Component {
  static propTypes = {
    dateEnd: PropTypes.string,
    dateStart: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string
  }

  render() {
    return (
      <div className={styles.UserProject}>
        <div className={styles.UserProjectHeader}>
          <div className={styles.UserProjectLogo} />

          <div className={styles.UserProjectInfo}>
            {this.props.name && (
              <div className={styles.UserProjectTitle}>
                {this.props.name}
              </div>
            )}

            {this.props.dateStart && (
              <div className={styles.UserProjectDate}>
                {moment(this.props.dateStart).format('MMMM, YYYY')}
                {this.props.dateEnd && ` - ${moment(this.props.dateEnd).format('MMMM, YYYY')}`}
              </div>
            )}
          </div>
        </div>

        <div className={styles.UserProjectContainer}>
          {this.props.description}
        </div>
      </div>
    )
  }
}

export default UserProject;
