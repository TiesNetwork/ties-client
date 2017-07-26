import { Link, Route } from 'react-router-dom'

import ProfileEdit from './scenes/Edit'

class Profile extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  render() {
    const { user } = this.props
    console.log(this.props.user)

    return (
      <div>
        <div>
          <Link to="/profile/edit">Edit profile</Link>
        </div>

        <hr />

        <div>
          <Route component={ProfileEdit} path="/profile/edit" />
        </div>

        {user && (
          <div>
            <div>
              {user.name} {user.surname}
            </div>

            <div>
              {user.country}, {user.company}, {user.position}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state.scenes.profile,
    user: state.entities.users[state.services.session.userId]
  })
)(Profile)
