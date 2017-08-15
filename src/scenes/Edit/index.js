/** Scenes **/
import EditPersonal from './scenes/Personal'

class Edit extends Component {
  render() {
    return (
      <div>
        <Route component={EditPersonal} path="/edit/personal" />
      </div>
    )
  }
}

export default Edit
