class Avatar extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
  }

  convertHexToBase64 = str => btoa(String.fromCharCode.apply(null,
    str.replace(/^0x/, '').replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")))

  render() {
    console.log(this.props.src)

    return (
      <div className={classNames(this.props.className, styles.Avatar)}>
        {this.props.src && (
          <img
            className={styles.AvatarContent}
            src={`data:image/png;base64,${this.convertHexToBase64(this.props.src)}`}
          />
        )}
      </div>
    )
  }
}

export default Avatar
