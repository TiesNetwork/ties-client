const UsersShowProject = ({ dateEnd, dateStart, description, name }) => (
  <div className={styles.UsersShowProject}>
    <div className={styles.UsersShowProjectHeader}>
      <div className={styles.UsersShowProjectLogo} />

      <div className={styles.UsersShowProjectInfo}>
        <div className={styles.UsersShowProjectTitle}>
          {name}
        </div>

        <div className={styles.UsersShowProjectDate}>
          {moment(dateStart).format('MMMM, YYYY')}
          {dateEnd && ` - ${moment(dateEnd).format('MMMM, YYYY')}`}
        </div>
      </div>
    </div>

    <div className={styles.UsersShowProjectContainer}>
      {description}
    </div>
  </div>
);

export default UsersShowProject;
