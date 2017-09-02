import { Field as ReduxField } from 'redux-form'

import FormCheckbox from './components/Checkbox'
import FormInput from './components/Input'
import FormFile from './components/InputFile'
import FormRecipients from './components/Recipients'
import FormSelect from './components/Select'
import FormTags from './components/Tags'

const ReduxFieldAdapter = props => {
  const {
    children, input,
    meta: { error, touched }
  } = props

  return children({
    ...input,
    error: touched && error
  })
}

class Actions extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className={classNames(this.props.className, styles.FormActions)}>
        {React.Children.map(this.props.children, child => child && React.cloneElement(child, {
          className: classNames(child.props.className, styles.FormAction)
        }))}
      </div>
    )
  }
}

class Field extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }

  state = { id: _.uniqueId('field_') }

  render() {
    return (
      <div className={classNames(this.props.className, styles.FormField)}>
        <ReduxField
          component={ReduxFieldAdapter}
          name={this.props.name}
          normalize={this.props.normalize}
          value={this.props.value}
        >
          { props => React.cloneElement(this.props.children, { ...props, id: this.state.id }) }
        </ReduxField>
      </div>
    )
  }
}

class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func
  }

  render() {
    return (
      <form
        className={classNames(this.props.className, styles.Form)}
        onSubmit={this.props.onSubmit}
      >
        {this.props.children}
      </form>
    )
  }
}

class Group extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className={styles.FormGroup}>
        {React.Children.map(this.props.children, child => React.cloneElement(child, {
          className: classNames(child.props.className, styles.FormGroupField)
        }))}
      </div>
    )
  }
}

export const Checkbox = props => (
  <Field {...props}>
    <FormCheckbox {...props} />
  </Field>
)

export const File = props => (
  <Field {...props}>
    <FormFile {...props} />
  </Field>
)

File.CONVERTER = FormFile.CONVERTER

export const Input = props => (
  <Field {...props}>
    <FormInput {...props} />
  </Field>
)

export const Select = props => (
  <Field {...props}>
    <FormSelect {...props} />
  </Field>
)

export const Tags = props => (
  <Field {...props}>
    <FormTags {...props} />
  </Field>
)

export const Recipients = props => (
  <Field {...props}>
    <FormRecipients {...props} />
  </Field>
)

export default Form
export { Actions, Group }
