/** Components **/
import Block from '../../../../../../../../components/Block';
import Button from '../../../../../../../../components/Button';
import Project from './Project';

const UsersUserExperience = ({ history, isCurrentUser, projects }) => (
  <Block
    actions={isCurrentUser && <Button onClick={() => history.push('/private/edit/experience/')}>Edit</Button>}
    title="Experience"
  >
    {projects && projects.length > 0
      ? projects.map(project => <Project {...project} key={project.id} />)
      : isCurrentUser && <Button onClick={() => history.push('/private/edit/experience/create')}>Add new project</Button>
    }
  </Block>
);

export default withRouter(UsersUserExperience);
