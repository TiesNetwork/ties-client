class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string
  }

  static TYPE = {
    SEARCH: 'Search'
  }

  render() {
    return <i className={classNames(this.props.className, styles.Icon, styles[`Icon${this.props.type}`])} />
  }
}

export default Icon
