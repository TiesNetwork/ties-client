/** Components **/
import Block from '../../../../../../../../components/Block';
import Button from '../../../../../../../../components/Button';
import User from './User';

const UsersShowContacts = ({ contacts, isCurrentUser }) => (
  <Block title="Contacts">
    {contacts && (
      <div className={styles.UsersShowContactsList}>
        {contacts.map(address => <User address={address} key={address} />)}
      </div>
    )}

    {isCurrentUser && (
      <div className={styles.UsersShowContactsInvitation}>
        <div className={styles.UsersShowContactsInvitationDescription}>
          You can invite your friends to <strong>Ties.Network</strong>
        </div>

        <Button
          className={styles.UsersShowContactsInvitationAction}
          onClick={() => console.log(123)}
        >
          Generate invitation code
        </Button>
      </div>
    )}
  </Block>
);

export default UsersShowContacts;
