import Styles from './textarea.scss'

class Textarea extends React.Component {
  render() {
    return (
      <div className={Styles.Textarea}>
        {this.props.label && (
          <label
            className={Styles.TextareaLabel}
            htmlFor={this.props.id}
          >
            {this.props.label}
          </label>
        )}

        <textarea {...this.props} />
      </div>
    )
  }
}

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Textarea
