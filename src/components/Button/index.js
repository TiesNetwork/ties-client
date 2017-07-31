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
    solid: PropTypes.bool,
    style: PropTypes.object
  }

  static defaultProps = {
    color: ButtonColor.PRIMARY
  }

  static color = ButtonColor

  render() {
    return (
      <button className={classNames(
        this.props.className,
        styles.Button,
        styles[`Button${this.props.color}`],
        this.props.solid && styles.ButtonSolid
      )}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
