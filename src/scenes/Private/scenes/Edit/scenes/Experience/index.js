import { Switch } from 'react-router-dom';

/** Actions **/
import { deleteProject } from './actions';

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
            {projects.map(project => (
              <EditExperienceItem {...project}
                key={project.id}
                onEdit={history.push(`${match.url}/${id}`)}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </Block>
    )}
  </div>
);

const mapStateToProps = state => ({
  projects: (state.entities.users[state.entities.account.id].projects || []).map(projectId => state.entities.projects[projectId])
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (address, id) => dispatch(deleteProject(address, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExperience);
