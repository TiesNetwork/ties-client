/** Components **/
import Button from '../../../components/Button';
import Form, { Input } from '../../../components/Form';
import Icon from '../../../components/Icon';

function SearchForm({ handleSubmit }) {
  return (
    <Form
      className={styles.SearchForm}
      onSubmit={handleSubmit}
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
        name="text"
        placeholder="Search"
      />
    </Form>
  );
}

export default reduxForm({
  form: 'SearchForm'
})(SearchForm);
