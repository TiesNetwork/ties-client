import { withRouter } from 'react-router-dom'

/** Components **/
import Button from '../../../../../components/Button'
import UserProject from '../../../../User/components/Project'

class EditExperienceItem extends Component {
  static propTypes = UserProject.propTypes

  handleEditClick = () => this.props.history.push(`/edit/experience/${this.props.id}`)

  render() {
    return (
      <div className={styles.EditExperienceItem}>
        <UserProject {...this.props} />

        <div className={styles.EditExperienceItemActions}>
          <Button onClick={this.handleEditClick}>
            Edit
          </Button>
        </div>
      </div>
    )
  }
}

export default withRouter(EditExperienceItem)
