import { Field as ReduxField } from 'redux-form'

import CheckboxComponent from './components/Checkbox'
import InputComponent from './components/Input'
import TagsComponent from './components/Tags'

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
      <div className={styles.FormActions}>
        {React.Children.map(this.props.children, child => React.cloneElement(child, {
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
    <CheckboxComponent {...props} />
  </Field>
)

export const Input = props => (
  <Field {...props}>
    <InputComponent {...props} />
  </Field>
)

export const Tags = props => (
  <Field {...props}>
    <TagsComponent {...props} />
  </Field>
)


export default Form
export { Actions, Group }
