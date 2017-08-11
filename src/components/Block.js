class Block extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string
  }

  render() {
    return (
      <div className={classNames(this.props.className, styles.Block)}>
        {this.props.title && (
          <div className={styles.BlockTitle}>
            {this.props.title}
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
