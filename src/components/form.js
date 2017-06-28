import classNames from 'classnames'
import { uniqueId } from 'lodash'

import InputComponent from './form/input'
import SelectComponent from './form/select'
import TextareaComponent from './form/textarea'

import Styles from './form.scss'

class Actions extends React.Component {
  render() {
    return (
      <div className={Styles.FormActions}>
        {this.props.children}
      </div>
    )
  }
}

class Field extends React.Component {
  state = { id: uniqueId('field_') }

  render() {
    return (
      <div className={classNames(this.props.className, Styles.FormField)}>
        { React.cloneElement(this.props.children, { id: this.state.id })}
      </div>
    )
  }
}

class Form extends React.Component {
  render() {
    return (
      <form className={classNames(this.props.className, Styles.Form)}>
        {this.props.children}
      </form>
    )
  }
}

export default Form
export { Actions }

export const Input = props => (
  <Field label={props.label}>
    <InputComponent {...props} />
  </Field>
)

export const Select = props => (
  <Field label={props.label}>
    <SelectComponent {...props} />
  </Field>
)


export const Textarea = props => (
  <Field label={props.label}>
    <TextareaComponent {...props} />
  </Field>
)

