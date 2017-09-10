function UserExperienceProject({ dateEnd, dateStart, description, name }) {
  return (
    <div className={styles.UserExperienceProject}>
      <div className={styles.UserExperienceProjectHeader}>
        <div className={styles.UserExperienceProjectTitle}>
          {name}
        </div>

        <div className={styles.UserExperienceProjectPeriod}>
          {moment(dateStart).format('MMMM, YYYY')}
          {dateEnd && ' - '}
          {moment(dateEnd).format('MMMM, YYYY')}
        </div>
      </div>

      <div className={styles.UserExperienceProjectContainer}>
        {description}
      </div>
    </div>
  );
}

const mapStateToProps = (state, { id }) => state.entities.projects[id];

export default connect(mapStateToProps)(UserExperienceProject);
