/** Actions **/
import { addContact, deleteContact } from './actions';

/** Components **/
import Button from '../../../../../../../../components/Button';
import Icon from '../../../../../../../../components/Icon';

function UserPersonalActions({ addContact, deleteContact, isContact }) {
  return (
    <div className={styles.UserPersonalActions}>
      <Button
        className={styles.UserPersonalActionsButton}
        color={Button.COLOR.CUSTOM}
        onClick={() => console.log('Send message!')}
      >
        Message
      </Button>

      <Button
        className={styles.UserPersonalActionsButton}
        color={Button.COLOR.CUSTOM}
        onClick={isContact ? deleteContact : addContact}
      >
        <Icon
          className={styles.UserPersonalActionsIcon}
          type={Icon.TYPE.ADD_CONTACT}
        />

        {isContact ? 'Remove' : 'Add'}
      </Button>

      <Button
        className={styles.UserPersonalActionsButton}
        color={Button.COLOR.CUSTOM}
        onClick={() => history.push({ pathname: '/private/transfer', query: { to: address }})}
      >
        Transfer
      </Button>

      <Button
        className={styles.UserPersonalActionsButton}
        color={Button.COLOR.CUSTOM}
        onClick={() => console.log('Issue a Invoice')}
      >
        Invoice
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, { address }) => ({
  addContact: () => dispatch(addContact(address)),
  deleteContact: () => dispatch(deleteContact(address))
});

export default withRouter(connect(null, mapDispatchToProps)(UserPersonalActions));
