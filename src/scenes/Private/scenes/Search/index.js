/** Actions **/
import { search } from './actions';

/** Components **/
import Form from './components/Form';
import User from './components/User';

function Search({ handleSubmit, result }) {
  return (
    <div className={styles.Search}>
      <Form onSubmit={handleSubmit} />
      
      {result && (
        <div className={styles.SearchResult}>
          <div className={styles.SearchResultTitle}>
            Search Results ({result.users.length || 0})
          </div>

          {result.users && result.users.length > 0 && (
            <div className={styles.SearchResultContainer}>
              {result.users.map(address => <User address={address} key={address} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => state.scenes.search;
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(search(values.text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
