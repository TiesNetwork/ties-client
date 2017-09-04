import { sendMessage } from './actions';

/** Components **/
import Header from './components/Header';
import Form from './components/Form';

function Messages({ handleSubmit, user }) {
  return (
    <div className={styles.Messages}>
      <Header {...user} />

      <div className={styles.MessagesContainer}>

      </div>

      <Form onSubmit={handleSubmit} />
    </div>
  );
}

const mapStateToProps = (state, { match }) => ({
  user: state.entities.users[match.params.userAddress]
});
const mapDispatchToProps = (dispatch, { match }) => ({
  handleSubmit: values => dispatch(sendMessage(match.params.userAddress, values.message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
