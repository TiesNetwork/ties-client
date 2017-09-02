/** Actions **/
import { addContact, removeContact } from '../../actions';

/** Components **/
import Block from '../../../../../../../../components/Block';
import Button from '../../../../../../../../components/Button';
import Icon from '../../../../../../../../components/Icon';
import Personal from '../../../../../../../../components/Personal';
import Tag from '../../../../../../../../components/Tag';

const UsersUserPersonal = ({
  handleAddClick,
  handleEditClick,
  handleInvoiceClick,
  handleRemoveClick,
  handleTransferClick,
  isContact,
  isCurrentUser,
  personal
}) => (
  <Block
    actions={isCurrentUser && <Button onClick={handleEditClick}>Edit</Button>}
    title="Personal Information"
  >
    <Personal {...personal} />

    {personal.keywords && personal.keywords.length > 0 && (
      <div className={styles.UsersUserPersonalTags}>
        {personal.keywords.map((keyword, index) => (
          <Tag
            className={styles.UsersUserPersonalTag}
            key={index}
            title={keyword}
          />
        ))}
      </div>
    )}

    {!isCurrentUser && (
      <div className={styles.UsersUserActions}>
        <Button
          className={styles.UsersUserAction}
          color={Button.COLOR.CUSTOM}
          onClick={handleAddClick}
        >
          Message
        </Button>

        <Button
          className={styles.UsersUserAction}
          color={Button.COLOR.CUSTOM}
          onClick={isContact ? handleRemoveClick : handleAddClick}
        >
          <Icon
            className={styles.UsersUserActionIcon}
            type={Icon.TYPE.ADD_CONTACT}
          />

          {isContact ? 'Remove' : 'Add'}
        </Button>

        <Button
          className={styles.UsersUserAction}
          color={Button.COLOR.CUSTOM}
          onClick={handleTransferClick}
        >
          Transfer
        </Button>

        <Button
          className={styles.UsersUserAction}
          color={Button.COLOR.CUSTOM}
          onClick={handleInvoiceClick}
        >
          Invoice
        </Button>
      </div>
    )}
  </Block>
);

const mapDispatchToProps = (dispatch, { address, history }) => ({
  handleAddClick: () => dispatch(addContact(address)),
  handleEditClick: () => history.push('/private/edit/personal'),
  handleInvoiceClick: () => history.push({
    pathname: '/private/invoice/create',
    query: { to: address }
  }),
  handleRemoveClick: () => dispatch(removeContact(address)),
  handleTransferClick: () => history.push({
    pathname: '/private/transfer/send',
    query: { to: address }
  })
});

export default connect(null, mapDispatchToProps)(withRouter(UsersUserPersonal));
