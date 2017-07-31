import { Link, Route } from 'react-router-dom'

import EditPersonal from './scenes/Personal'

class Edit extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/edit/experience">Edit experience</Link>&nbsp;|&nbsp;
          <Link to="/edit/personal">Edit personal</Link>
        </div>

        <hr />

        <div>
          <Route component={EditPersonal} path="/edit/personal" />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state.scenes.edit
  })
)(Edit)
