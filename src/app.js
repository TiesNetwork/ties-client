import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Profile from './profile'
  import ProfileEdit from './profile/edit'
  import ProfileExperiencesNew from './profile/experiences/new'
import Search from './search'
import User from './user'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="AppDemoMenu">
            <ul>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
              <li>
                <Link to="/profileEdit">Редактирование профиля</Link>
              </li>
              <li>
                <Link to="/profileExperiencesNew">Добавления опыта работы</Link>
              </li>
              <li>
                <Link to="/search">Поиск</Link>
              </li>
              <li>
                <Link to="/user">Пользователь</Link>
              </li>
            </ul>
          </div>

          <div className="AppContainer">
            <Route component={Profile} path="/profile" />
              <Route component={ProfileEdit} path="/profileEdit" />
              <Route component={ProfileExperiencesNew} path="/profileExperiencesNew" />

            <Route component={Search} path="/search" />
            <Route component={User} path="/user" />
          </div>
        </div>
      </Router>
    )
  }
}
