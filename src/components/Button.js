const ButtonColor = {
  CUSTOM: 'Custom',
  DANGER: 'Danger',
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
  WHITE: 'White'
}

class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    solid: PropTypes.bool,
    style: PropTypes.object,
    type: PropTypes.string
  }

  static defaultProps = {
    color: ButtonColor.PRIMARY,
    type: 'button'
  }

  static color = ButtonColor

  render() {
    return (
      <button
        className={classNames(
          this.props.className,

          styles.Button,
          styles[`Button${this.props.color}`],

          this.props.disabled && styles.ButtonDisabled,
          this.props.solid && styles.ButtonSolid
        )}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button
