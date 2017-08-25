/** Components **/
import FormRecipientsItem from './Item'

class FormRecipients extends Component {
  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape(FormRecipientsItem.propTypes)),
      PropTypes.shape(FormRecipientsItem.propTypes),
      PropTypes.string
    ])
  }

  render() {
    return (
      <div className={styles.FormRecipients}>
        <label className={styles.FormRecipientsLabel}>
          {this.props.label}
        </label>

        {this.props.value && (
          <div className={styles.FormRecipientsList}>
            {([].concat(this.props.value).map((recipient, index) => (
              <FormRecipientsItem {...recipient} key={index} />
            )))}
          </div>
        )}
      </div>
    )
  }
}

export default FormRecipients
