class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyPress: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    type: 'text'
  }

  state = { isFocused: false }

  handleBlur = event => {
    this.setState({ isFocused: false })
    this.props.onBlur && this.props.onBlur(event)
  }

  handleChange = event => {
    this.props.onChange && this.props.onChange(event)
  }

  handleFocus = event => {
    this.setState({ isFocused: true })
    this.props.onFocus && this.props.onFocus(event)
  }

  render() {
    return (
      <div className={classNames(
        styles.Input,
        this.props.type == 'hidden' && styles.InputHidden
      )}>
        <div className={styles.InputContainer}>
          {this.props.label && (
            <label
              className={classNames(
                styles.InputLabel,

               (this.state.isFocused || this.props.value) && styles.InputLabelDensed,
                this.props.error && styles.InputLabelError,
                this.state.isFocused && styles.InputLabelFocused,
              )}
              htmlFor={this.props.id}
            >
              {this.props.label}
            </label>
          )}

          <input
            className={classNames(
              styles.InputControl,
              this.state.isFocused && styles.InputControlFocused
            )}
            id={this.props.id}
            name={this.props.name}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onKeyPress={this.props.onKeyPress}
            placeholder={this.props.placeholder}
            type={this.props.type}
            value={this.props.value}
          />

          <div className={classNames(
            styles.InputDivider,

            this.props.error && styles.InputDividerError,
            this.state.isFocused && styles.InputDividerFocused
          )}/>
        </div>

        {this.props.error && (
          <div className={styles.InputError}>
            {this.props.error}
          </div>
        )}
      </div>
    )
  }
}

export default Input
