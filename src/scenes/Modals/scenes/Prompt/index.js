/** Components **/
import Modal from '../../../../components/Modal'
import ModalsPromptForm from './components/Form'

class ModalsPrompt extends Component {
  static propTypes = {
    description: PropTypes.string,
    onSubmit: PropTypes.func,
    title: PropTypes.string
  }

  handleSubmit = values => this.props.onSubmit && this.props.onSubmit(values.input)

  render() {
    return (
      <Modal id="prompt">
        {this.props.description && (
          <div className={styles.ModalsPromptDescription}>
            {this.props.description}
          </div>
        )}

        <ModalsPromptForm onSubmit={this.handleSubmit} />
      </Modal>
    )
  }
}

export default connect(state => ({
  ...state.services.modals.prompt
}))(ModalsPrompt)
