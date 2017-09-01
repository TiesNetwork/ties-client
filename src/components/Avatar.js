class Avatar extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string
    ])
  }

  render() {
    return (
      <div className={classNames(this.props.className, styles.Avatar)}>
        {this.props.src && (
          <img
            className={styles.AvatarContent}
            src={`data:image/png;base64,${new Buffer(this.props.src).toString('base64')}`}
          />
        )}
      </div>
    )
  }
}

export default Avatar
