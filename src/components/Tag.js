/** Components **/
import Button from './Button';
import Icon from './Icon';

class Tag extends Component {
  static propTypes = {
    className: PropTypes.string,
    onRemove: PropTypes.func,
    title: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ])
  }

  handleRemoveClick = () => this.props.onRemove && this.props.onRemove(this.props.value);

  render() {
    return (
      <div className={classNames(this.props.className, styles.Tag)}>
        <div className={styles.TagTitle}>
          {this.props.title}
        </div>

        {this.props.onRemove && (
          <Button
            className={styles.TagRemove}
            color={Button.color.CUSTOM}
            onClick={this.handleRemoveClick}
          >
            <Icon
              className={styles.TagRemoveIcon}
              type={Icon.TYPE.CLOSE}
            />
          </Button>
        )}
      </div>
    )
  }
}

export default Tag
