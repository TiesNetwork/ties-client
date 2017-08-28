/** Scenes **/
import EditExperience from './scenes/Experience'
import EditPersonal from './scenes/Personal'

class Edit extends Component {
  render() {
    return (
      <div>
        <Route component={EditExperience} path={`${this.props.match.url}/experience`} />
        <Route component={EditPersonal} path={`${this.props.match.url}/personal`} />
      </div>
    )
  }
}

export default Edit
