class Input extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
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
      <div className={styles.Input}>
        <div className={styles.InputContainer}>
          {this.props.label && (
            <label
              className={styles.InputLabel}
              htmlFor={this.props.id}
            >
              {this.props.label}
            </label>
          )}

          <input
            className={styles.InputControl}
            id={this.props.id}
            name={this.props.name}
            type={this.props.type}
            value={this.props.value}
          />
        </div>
      </div>
    )
  }
}

export default Input
