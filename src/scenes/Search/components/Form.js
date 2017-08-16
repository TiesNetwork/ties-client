import Button from '../../../components/Button'
import Form, { Input } from '../../../components/Form'
import Icon from '../../../components/Icon'

class SearchForm extends Component {
  render() {
    return (
      <Form
        className={styles.SearchForm}
        onSubmit={this.props.handleSubmit}
      >
        <Button
          className={styles.SearchFormButton}
          color={Button.COLOR.CUSTOM}
          type="submit"
        >
          <Icon type={Icon.TYPE.SEARCH} />
        </Button>

        <Input
          className={styles.SearchFormInput}
          name="search"
          placeholder="Search"
        />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'SearchForm'
})(SearchForm)
