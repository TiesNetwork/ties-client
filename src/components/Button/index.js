const ButtonColor = {
  DANGER: 'Danger',
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
  WHITE: 'White'
}

class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
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
          this.props.solid && styles.ButtonSolid
        )}
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button
