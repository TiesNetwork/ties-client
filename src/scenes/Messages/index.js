/** Actions **/
import { createDialog, fetchUser, sendMessage } from './actions';

/** Components **/
import Form from './components/Form';
import Header from './components/Header';
import Message from './components/Item';

class Messages extends Component {
  componentDidMount() {
    const { address, dialog, createDialog, fetchUser, user } = this.props;

    !dialog && createDialog();
    !user && fetchUser();
  }

  render() {
    const { address, handleSubmit, messages, user } = this.props;

    return (
      <div className={styles.Messages}>
        <Header {...user} />

        <div className={styles.MessagesContainer}>
          {messages && messages.length > 0 && (
            <div className={styles.MessagesList}>
              {messages.map((message, index) => (
                <Message {...message}
                  key={index}
                  isIncoming={message.from != address}
                />
              ))}
            </div>
          )}
        </div>

        <Form onSubmit={handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  address: match.params.address,
  dialog: state.entities.dialogs[match.params.address],
  messages: state.entities.messages.items.filter(message => message.address == match.params.address),
  user: state.entities.users[match.params.address]
});
const mapDispatchToProps = (dispatch, { match }) => ({
  createDialog: () => dispatch(createDialog(match.params.address)),
  fetchUser: () => dispatch(fetchUser(match.params.address)),
  handleSubmit: values => dispatch(sendMessage(match.params.address, values.message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
