import classNames from 'classnames'
import { uniqueId } from 'lodash'

import InputComponent from './form/input'

class Field extends React.Component {
  state = { id: uniqueId('field_') }

  render() {
    return (
      <div className={classNames('form__field', this.props.className)}>
        { React.cloneElement(this.props.children, { id: this.state.id })}
      </div>
    )
  }
}

export default class Form extends React.Component {
  render() {
    return (
      <form className={classNames(this.props.className, 'Form')}>
        {this.props.children}
      </form>
    )
  }
}

export const Input = props => (
  <Field className="form__field_input">
    <InputComponent {...props} />
  </Field>
)
