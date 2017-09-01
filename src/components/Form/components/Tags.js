import Input from './Input'
import Tag from '../../Tag'

class Tags extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.string
      ),
      PropTypes.string
    ])
  }

  state = { value: '' }

  handleChange = event => this.setState({ value: event.target.value })

  handleKeyPress = event => {
    if (event.key == 'Enter' || event.key == ',') {
      event.preventDefault()
      this.setState({ value: '' })

      this.props.onChange && this.props.onChange([
        ...this.props.value,
        this.state.value
      ])
    }
  }

  handleRemove = index => this.props.onChange && this.props.onChange([
    ..._.slice(this.props.value, 0, index),
    ..._.slice(this.props.value, index + 1)
  ])

  render() {
    return (
      <div className={styles.Tags}>
        <Input
          className={styles.TagsControl}
          id={this.props.id}
          label={this.props.label}
          name={this.props.name}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.value}
        />

        {this.props.value && this.props.value.length > 0 && (
          <div className={styles.TagsList}>
            {this.props.value.map((value, index) => (
              <Tag
                className={styles.TagsItem}
                key={index}
                onRemove={this.handleRemove}
                title={value}
                value={index}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Tags
