import Button from '../../components/button'
import Form, { Input } from '../../components/form'

import SearchUserItem from './components/search_user_item'

import Styles from './styles.scss'

class Search extends React.Component {
  render() {
    return (
      <div className={Styles.Search}>
        <Form className={Styles.SearchForm}>
          <Input
            name="search"
            placeholder="Search"
          />

          <Button>
            Search!
          </Button>
        </Form>

        <div className={Styles.SearchResult}>
          <SearchUserItem />
          <SearchUserItem />
          <SearchUserItem />
        </div>
      </div>
    )
  }
}

export default Search
