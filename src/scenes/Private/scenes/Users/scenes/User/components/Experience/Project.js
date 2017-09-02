const UsersUserExperienceProject = ({ dateEnd, dateStart, description, name }) => (
  <div className={styles.UsersUserExperienceProject}>
    <div className={styles.UsersUserExperienceProjectHeader}>
      <div className={styles.UsersUserExperienceProjectLogo} />

      <div className={styles.UsersUserExperienceProjectInfo}>
        <div className={styles.UsersUserExperienceProjectTitle}>
          {name}
        </div>

        <div className={styles.UsersUserExperienceProjectDate}>
          {moment(dateStart).format('MMMM, YYYY')}
          {dateEnd && ` - ${moment(dateEnd).format('MMMM, YYYY')}`}
        </div>
      </div>
    </div>

    <div className={styles.UsersUserExperienceProjectContainer}>
      {description}
    </div>
  </div>
);

export default UsersUserExperienceProject;
