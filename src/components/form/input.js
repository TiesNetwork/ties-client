import Styles from './input.scss'

class Input extends React.Component {
  render() {
    return (
      <div className={Styles.Input}>
        {this.props.label && (
          <label
            className={Styles.InputLabel}
            htmlFor={this.props.id}
          >
            {this.props.label}
          </label>
        )}

        <input {...this.props} />
      </div>
    )
  }
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Input
