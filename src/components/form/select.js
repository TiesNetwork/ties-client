import Styles from './select.scss'

class Select extends React.Component {
  render() {
    return (
      <div className={Styles.Select}>
        {this.props.label && (
          <label
            className={Styles.SelectLabel}
            htmlFor={this.props.id}
          >
            {this.props.label}
          </label>
        )}

        <select {...this.props}>
          {this.props.children}
        </select>
      </div>
    )
  }
}

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Select
