import { sendMessage } from './actions';

/** Components **/
import Header from './components/Header';
import Form from './components/Form';
import Message from './components/Item';

function Messages({ handleSubmit, messages, user }) {
  return (
    <div className={styles.Messages}>
      <Header {...user} />

      <div className={styles.MessagesContainer}>
        {messages && messages.length > 0 && (
          <div className={styles.MessagesList}>
            {messages.map((message, index) => (
              <Message
                {...message}
                key={index}
                isIncoming={message.from != user.address}
              />
            ))}
          </div>
        )}
      </div>

      <Form onSubmit={handleSubmit} />
    </div>
  );
}

const mapStateToProps = (state, { match }) => ({
  messages: state.entities.messages.items.filter(message => message.address == match.params.userAddress),
  user: state.entities.users[match.params.userAddress]
});
const mapDispatchToProps = (dispatch, { match }) => ({
  handleSubmit: values => dispatch(sendMessage(match.params.userAddress, values.message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
