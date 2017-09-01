/** Actions **/
import { search } from './actions';

/** Components **/
import SearchForm from './components/Form';
import SearchUser from './components/User';

const Search = ({ handleSubmit, result }) => (
  <div>
    <SearchForm onSubmit={handleSubmit} />

    {result && result.users && (
      <div>
        <div className={styles.SearchResultTitle}>
          Search Results ({result.users.length || 0})
        </div>

        <div>
          {result.users.map((address, index) => <SearchUser address={address} key={index} />)}
        </div>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  result: state.scenes.search.result
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(search(values.text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)
