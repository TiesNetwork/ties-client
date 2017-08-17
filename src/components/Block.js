class Block extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string
  }

  render() {
    return (
      <div
        className={classNames(this.props.className, styles.Block)}
        onClick={this.props.onClick}
      >
        {(this.props.actions || this.props.title) && (
          <div className={styles.BlockHeader}>
            {this.props.title && (
              <div className={styles.BlockTitle}>
                {this.props.title}
              </div>
            )}

            {this.props.actions && (
              <div className={styles.BlockActions}>
                {React.Children.map(this.props.actions, child => React.cloneElement(child, {
                  className: classNames(child.props.className, styles.BlockAction)
                }))}
              </div>
            )}
          </div>
        )}

        <div className={styles.BlockContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Block
