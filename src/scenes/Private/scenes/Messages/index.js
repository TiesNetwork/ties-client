/** Components **/
import Header from './components/Header';
import Form from './components/Form';

function Messages({ user }) {
  return (
    <div className={styles.Messages}>
      <Header {...user} />

      <div className={styles.MessagesContainer}>

      </div>

      <Form onSubmit={() => console.log(123)} />
    </div>
  );
}

const mapStateToProps = (state, { match }) => ({
  user: state.entities.users[match.params.userAddress]
});

export default connect(mapStateToProps)(Messages);
