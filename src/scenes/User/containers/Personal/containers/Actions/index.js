/** Actions **/
import { addContact, deleteContact } from './actions';

/** Components **/
import Button from '../../../../../../components/Button';
import Icon from '../../../../../../components/Icon';

function UserPersonalActions({ addContact, address, deleteContact, isContact, history }) {
  return (
    <div className={styles.UserPersonalActions}>
      <Button
        className={styles.UserPersonalActionsButton}
        color={Button.COLOR.CUSTOM}
        onClick={() => history.push(`/messages/${address}`)}
      >
        <Icon
          className={styles.UserPersonalActionsIcon}
          type={Icon.TYPE.MESSAGE}
        />

        Message
      </Button>

      <Button
        className={styles.UserPersonalActionsButton}
        color={Button.COLOR.CUSTOM}
        onClick={isContact ? deleteContact : addContact}
      >
        <Icon
          className={styles.UserPersonalActionsIcon}
          type={isContact ? Icon.TYPE.DELETE_CONTACT : Icon.TYPE.ADD_CONTACT}
        />

        {isContact ? 'Remove' : 'Add'}
      </Button>

      <Button
        className={styles.UserPersonalActionsButton}
        color={Button.COLOR.CUSTOM}
        onClick={() => history.push({ pathname: '/transfer/send', query: { to: address }})}
      >
        <Icon
          className={styles.UserPersonalActionsIcon}
          type={Icon.TYPE.INVOICE}
        />

        Transfer
      </Button>

      <Button
        className={styles.UserPersonalActionsButton}
        color={Button.COLOR.CUSTOM}
        onClick={() => history.push({ pathname: '/invoice', query: { to: address }})}
      >
        <Icon
          className={styles.UserPersonalActionsIcon}
          type={Icon.TYPE.INVOICE}
        />

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
