/** Actions **/
import { addContact } from '../../actions';

/** Components **/
import Block from '../../../../../../../../components/Block';
import Button from '../../../../../../../../components/Button';
import Icon from '../../../../../../../../components/Icon';
import Personal from '../../../../../../../../components/Personal';
import Tag from '../../../../../../../../components/Tag';

const UsersShowPersonal = ({
  handleAddClick, handleEditClick, handleTransferClick,
  isCurrentUser, personal
}) => (
  <Block
    actions={<Button onClick={handleEditClick}>Edit</Button>}
    title="Personal Information"
  >
    <Personal {...personal} />

    {personal.keywords && personal.keywords.length > 0 && (
      <div className={styles.UsersShowPersonalTags}>
        {personal.keywords.map((keyword, index) => (
          <Tag
            className={styles.UsersShowPersonalTag}
            key={index}
            title={keyword}
          />
        ))}
      </div>
    )}

    {!isCurrentUser && (
      <div className={styles.UsersShowActions}>
        <Button
          className={styles.UsersShowAction}
          color={Button.COLOR.CUSTOM}
          onClick={handleAddClick}
        >
          Message
        </Button>

        <Button
          className={styles.UsersShowAction}
          color={Button.COLOR.CUSTOM}
          onClick={handleAddClick}
        >
          <Icon
            className={styles.UsersShowActionIcon}
            type={Icon.TYPE.ADD_CONTACT}
          />

          Add
        </Button>

        <Button
          className={styles.UsersShowAction}
          color={Button.COLOR.CUSTOM}
          onClick={handleTransferClick}
        >
          Transfer
        </Button>

        <Button
          className={styles.UsersShowAction}
          color={Button.COLOR.CUSTOM}
          onClick={handleTransferClick}
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
  handleTransferClick: () => history.push({
    pathname: '/private/transfer/send',
    query: { to: address }
  })
});

export default connect(null, mapDispatchToProps)(withRouter(UsersShowPersonal));
