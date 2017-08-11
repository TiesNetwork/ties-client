class Avatar extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
  }

  render() {
    return (
      <div className={classNames(this.props.className, styles.Avatar)} />
    )
  }
}

export default Avatar
