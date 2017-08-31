/** Components **/
import Block from '../../../../../../components/Block';
import Button from '../../../../../../components/Button';

import EditExperienceItem from './components/Item';

/** Scenes **/
import EditExperienceCreate from './scenes/Create';
import EditExperienceProject from './scenes/Project';

const EditExperience = ({ handleRemove, history, match, projects }) => (
  <div>
    <Switch>
      <Route component={EditExperienceCreate} path={`${match.url}/create`} />
      <Route component={EditExperienceProject} path={`${match.url}/:projectId`} />
    </Switch>

    {match.isExact && (
      <Block
        actions={<Button onClick={() => history.push(`${match.url}/create`)}>Create</Button>}
        title="Experience"
      >
        {projects && projects.length > 0 && (
          <div>
            {projects.map(projectId => <EditExperienceItem id={projectId} key={projectId} />)}
          </div>
        )}
      </Block>
    )}
  </div>
);

const mapStateToProps = state => ({
  projects: state.entities.users[state.entities.account.id].projects
});

export default connect(mapStateToProps)(EditExperience);
