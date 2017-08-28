/** Scenes **/
import EditExperience from './scenes/Experience';
import EditPersonal from './scenes/Personal';

const Edit = ({ match }) => (
  <div>
    <Route component={EditExperience} path={`${match.url}/experience`} />
    <Route component={EditPersonal} path={`${match.url}/personal`} />
  </div>
);

export default Edit;
