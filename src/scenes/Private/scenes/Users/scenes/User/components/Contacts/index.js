/** Components **/
import Block from '../../../../../../../../components/Block';
import Button from '../../../../../../../../components/Button';
import User from './User';

const UsersUserContacts = ({ contacts, history, isCurrentUser }) => (
  <Block title="Contacts">
    {contacts && (
      <div className={styles.UsersUserContactsList}>
        {contacts.map(address => <User address={address} key={address} />)}
      </div>
    )}

    {isCurrentUser && (
      <div className={styles.UsersUserContactsInvitation}>
        <div className={styles.UsersUserContactsInvitationDescription}>
          You can invite your friends to <strong>Ties.Network</strong>
        </div>

        <Button
          className={styles.UsersUserContactsInvitationAction}
          onClick={() => history.push('/private/invitation')}
        >
          Generate invitation code
        </Button>
      </div>
    )}
  </Block>
);

export default withRouter(UsersUserContacts);
