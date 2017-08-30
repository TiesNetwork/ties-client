/** Components **/
import Button from '../../../../../../../components/Button';
import UserProject from '../../../../Users/scenes/Show/components/Experience/Project';

const EditExperienceItem = ({ onEdit, onRemove, project }) => (
  <div className={styles.EditExperienceItem}>
    <UserProject {...project} />

    <div className={styles.EditExperienceItemActions}>
      <Button
        className={styles.EditExperienceItemAction}
        onClick={() => onEdit && onEdit(project.id)}
      >
        Edit
      </Button>

      <Button
        className={styles.EditExperienceItemAction}
        color={Button.COLOR.DANGER}
        onClick={() => onRemove && onRemove(project.__address, project.id)}
      >
        Remove
      </Button>
    </div>
  </div>
);

export default EditExperienceItem;
