/** Actions **/
import { deleteProject } from '../actions';

/** Components **/
import Button from '../../../../../../../components/Button';
import UserProject from '../../../../User/containers/Experience/components/Project';

const EditExperienceItem = ({ handleRemoveClick, history, id, project }) => (
  <div className={styles.EditExperienceItem}>
    <UserProject {...project} />

    <div className={styles.EditExperienceItemActions}>
      <Button
        className={styles.EditExperienceItemAction}
        onClick={() =>  history.push(`/private/edit/experience/${id}`)}
      >
        Edit
      </Button>

      <Button
        className={styles.EditExperienceItemAction}
        color={Button.COLOR.DANGER}
        onClick={handleRemoveClick}
      >
        Remove
      </Button>
    </div>
  </div>
);

const mapStateToProps = (state, { id }) => ({ project: state.entities.projects[id] });
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleRemoveClick: () => dispatch(deleteProject(ownProps.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditExperienceItem));
