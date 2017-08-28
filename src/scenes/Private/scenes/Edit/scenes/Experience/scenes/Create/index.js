/** Actions **/
import { createProject } from './actions';

/** Components **/
import Block from '../../../../../../../../components/Block';
import EditExperienceForm from '../../components/Form';

const EditExperienceCreate  = ({ handleSubmit }) => (
  <Block title="Create">
    <EditExperienceForm onSubmit={handleSubmit} />
  </Block>
);

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(createProject(values))
});

export default connect(null, mapDispatchToProps)(EditExperienceCreate);
