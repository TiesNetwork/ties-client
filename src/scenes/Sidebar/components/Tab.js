class SidebarTab extends Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    return (
      <div className={styles.SidebarTab}>
        {this.props.icon && (
          <div>

          </div>
        )}

        {this.props.title && (
          <div className={styles.SidebarTabTitle}>
            {this.props.title}
          </div>
        )}
      </div>
    )
  }
}

export default SidebarTab
