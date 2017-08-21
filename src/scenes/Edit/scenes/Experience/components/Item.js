/** Components **/
import Button from '../../../../../components/Button'
import UserProject from '../../../../User/components/Project'

class EditExperienceItem extends Component {
  static propTypes = {
    ...UserProject.propTypes,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func
  }

  handleEditClick = () => this.props.onEdit && this.props.onEdit(this.props.id)
  handleRemoveClick = () => this.props.onRemove && this.props.onRemove(this.props.__address, this.props.id)

  render() {
    return (
      <div className={styles.EditExperienceItem}>
        <UserProject {...this.props} />

        <div className={styles.EditExperienceItemActions}>
          <Button
            className={styles.EditExperienceItemAction}
            onClick={this.handleEditClick}
          >
            Edit
          </Button>

          <Button
            className={styles.EditExperienceItemAction}
            color={Button.COLOR.DANGER}
            onClick={this.handleRemoveClick}
          >
            Remove
          </Button>
        </div>
      </div>
    )
  }
}

export default EditExperienceItem
