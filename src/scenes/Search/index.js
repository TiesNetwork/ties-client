/** Components **/
import SearchForm from './components/Form'

/** Scenes **/
import SearchUsers from './scenes/Users'

class Search extends Component {
  render() {
    return (
      <div>
        <SearchForm />

        <div>
          <Route component={SearchUsers} path="/search/users" />
        </div>
      </div>
    )
  }
}

export default Search
