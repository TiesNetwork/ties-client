import { Component, PropTypes } from 'react'

export default class Input extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="input">
        {this.props.label && (
          <label
            className="input__label"
            htmlFor={this.props.id}
          >
            {this.props.label}
          </label>
        )}

        <input {...this.props}
          className="input__control"
        />
      </div>
    )
  }
}
