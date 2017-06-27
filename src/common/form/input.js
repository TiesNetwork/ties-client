class Input extends React.Component {
  render() {
    return (
      <div className="input">
        {this.props.label && (
          <label
            className="input__label"
            htmlFor={this.props.id}
          >
            {this.props.label}
          </label>
        )}

        <input {...this.props}
          className="input__control"
        />
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
