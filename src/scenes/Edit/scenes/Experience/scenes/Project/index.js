/** Actions **/
import { updateProject } from './actions';

/** Components **/
import Block from '../../../../../../components/Block';
import EditExperienceForm from '../../components/Form';

function EditExperienceProject({ handleSubmit, project }) {
  return (
    <Block title={project.name}>
      <EditExperienceForm
        initialValues={project}
        onSubmit={handleSubmit}
      />
    </Block>
  );
}

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId]
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(updateProject(values.__address, values.id, values))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExperienceProject);
