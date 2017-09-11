/** Actions **/
import { closeModal } from '../../services/modals';

/** Components **/
import Modal from '../Modal';
import PromptForm from './components/Form';

class Prompt extends Component {
  handleSubmit = values => {
    const { dispatch, onSubmit } = this.props;

    dispatch(closeModal('prompt'));
    onSubmit && onSubmit(values.input);
  }

  render() {
    const { description } = this.props;

    return (
      <Modal id="prompt">
        {description && (
          <div className={styles.PromptDescription}>
            {description}
          </div>
        )}

        <PromptForm onSubmit={this.handleSubmit} />
      </Modal>
    )
  }
}

const mapStateToProps = state => ({ ...state.services.modals.prompt });

export default connect(mapStateToProps)(Prompt);
