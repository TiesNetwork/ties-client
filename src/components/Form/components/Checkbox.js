class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ])
  }

  handleChange = event => this.props.onChange && this.props.onChange(event)

  render() {
    return (
      <div className={styles.Checkbox}>
        <label
          className={styles.CheckboxLabel}
          htmlFor={this.props.id}
        >
          <div className={classNames(
            styles.CheckboxControl,
            !!this.props.value && styles.CheckboxControlChecked
          )} />

          {this.props.label || this.props.name}

          <input
            checked={this.props.checked}
            className={styles.CheckboxInput}
            id={this.props.id}
            name={this.props.name}
            onChange={this.handleChange}
            type="checkbox"
            value={!!this.props.value}
          />
        </label>
      </div>
    )
  }
}

export default Checkbox
