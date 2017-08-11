class UserTag extends Component {
  static propTypes = {
    children: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    return (
      <div className={styles.UserTag}>
        {this.props.title || this.props.children}
      </div>
    )
  }
}

export default UserTag
