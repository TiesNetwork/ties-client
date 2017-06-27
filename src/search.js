import Button from './common/button'
import Form, { Input } from './common/form'

import { SearchUserItem } from './search/item'

import Style from './search.scss'

export default class Search extends React.Component {
  render() {
    return (
      <div className={Style.Search}>
        <Form className={Style.SearchForm}>
          <Input
            name="search"
            placeholder="Строка поиска"
          />

          <Button>
            Поиск
          </Button>
        </Form>

        <div className="SearchResults">
          <div className={Style.SearchResultsHeader}>
            <span>Результат поиска:</span>
          </div>

          <div className="SearchResultsContainer">
            <SearchUserItem fullName="John Doe" location="Moscow, Russia" />
            <SearchUserItem fullName="John Doe" location="Berlin, Germany" />
          </div>
        </div>
      </div>
    )
  }
}
