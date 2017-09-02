const UsersShowExperienceProject = ({ dateEnd, dateStart, description, name }) => (
  <div className={styles.UsersShowExperienceProject}>
    <div className={styles.UsersShowExperienceProjectHeader}>
      <div className={styles.UsersShowExperienceProjectLogo} />

      <div className={styles.UsersShowExperienceProjectInfo}>
        <div className={styles.UsersShowExperienceProjectTitle}>
          {name}
        </div>

        <div className={styles.UsersShowExperienceProjectDate}>
          {moment(dateStart).format('MMMM, YYYY')}
          {dateEnd && ` - ${moment(dateEnd).format('MMMM, YYYY')}`}
        </div>
      </div>
    </div>

    <div className={styles.UsersShowExperienceProjectContainer}>
      {description}
    </div>
  </div>
);

export default UsersShowExperienceProject;
