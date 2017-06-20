import classNames from 'classnames'
import { Component, PropTypes } from 'react'
import { uniqueId } from 'lodash'

import InputField from './form/input'

class Field extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  state = { id: uniqueId('field_') }

  render() {
    return (
      <div className={classNames('form__field', this.props.className)}>
        { React.cloneElement(this.props.children, { id: this.state.id })}
      </div>
    )
  }
}

export default class Form extends Component {
  render() {
    return (
      <form>
        {this.props.children}
      </form>
    )
  }
}

export const Input = props => (
  <Field className="form__field_input">
    <InputField {...props} />
  </Field>
)
