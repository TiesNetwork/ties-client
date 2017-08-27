import Portal from 'react-portal'

/** Actions **/
import { closeModal } from '../services/modals'

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func,
    id: PropTypes.string,
    isOpened: PropTypes.bool,
    title :PropTypes.string
  }

  render() {
    return (
      <Portal
        isOpened={this.props.isOpened}
        onClose={this.props.handleClose}
      >
        <div className={styles.Modal}>
          <div
            className={styles.ModalBackdrop}
            onClick={this.props.handleClose}
          />

          <div className={styles.ModalContainer}>
            <div className={styles.ModalTitle}>
              {this.props.title}
            </div>

            <div className={styles.ModalContent}>
              {this.props.children}
            </div>
          </div>
        </div>
      </Portal>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    ...state.services.modals[ownProps.id],
    isOpened: !!state.services.modals[ownProps.id]
  }),
  (dispatch, ownProps) => ({
    handleClose: () => dispatch(closeModal(ownProps.id))
  })
)(Modal)
