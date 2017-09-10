/** Actions **/
import { updatePersonal } from './actions'

/** Components **/
import Block from '../../../../components/Block'
import EditPersonalForm from './components/Form'

const EditPersonal = ({ handleSubmit, personal }) => (
  <Block title="Personal Information">
    <EditPersonalForm
      initialValues={personal}
      onSubmit={handleSubmit}
    />
  </Block>
);

const mapStateToProps = state => ({
  personal: state.entities.users[state.entities.account.id] || {}
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(updatePersonal(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPersonal);
