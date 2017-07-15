import { Link, Route } from 'react-router-dom'

import ProfileEdit from './scenes/Edit'

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/profile/edit">Edit profile</Link>
        </div>

        <div>
          <Route component={ProfileEdit} path="/profile/edit" />
        </div>
      </div>
    )
  }
}

export default Profile
