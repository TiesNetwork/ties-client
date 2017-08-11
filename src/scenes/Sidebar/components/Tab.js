class SidebarTab extends Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    return (
      <div className={styles.SidebarTab}>
        {this.props.title && (
          <div className={styles.SidebarTabTitle}>
            {this.props.title}
          </div>
        )}
      </div>
    )
  }
}

{/*<div*/}
  {/*className={classNames(*/}
    {/*styles.SidebarTabIcon,*/}
    {/*styles[`SidebarTabIcon${this.props.title}`]*/}
  {/*)}*/}
{/*/>*/}

export default SidebarTab
