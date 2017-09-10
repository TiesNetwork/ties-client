/** Actions **/
import { createInvitationCode, getInvitationCode } from './actions';

/** Components **/
import Block from '../../components/Block';
import Copy from '../../components/Copy';
import Form from './components/Form';

class Invitation extends Component {
  componentDidMount() {
    const { code, getInvitationCode } = this.props;

    !code && getInvitationCode();
  }

  render() {
    const { code, handleSubmit } = this.props;

    return (
      <Block>
        <div className={styles.Invitation}>
          <div className={styles.InvitationTitle}>
            You can share the following invitation code with your friends.
          </div>

          <div className={styles.InvitationDescription}>
            It will allow to topup their account and start Ties.Network at once.<br />
            The code is one time only. You need to generate a separate code for each your friend.<br />
            Code generation takes 0.2 ETH and 10 TIE from your account.
          </div>

          {code && (
            <div className={styles.InvitationCode}>
              <div className={styles.InvitationCodeTitle}>
                Copy this and send to your friend
              </div>

              <Copy value={code} />
            </div>
          )}

          <Form
            code={code}
            onSubmit={handleSubmit}
          />
        </div>
      </Block>
    );
  }
}

const mapStateToProps = state => ({
  code: state.entities.account.invitationCode
});
const mapDispatchToProps = dispatch => ({
  getInvitationCode: () => dispatch(getInvitationCode()),
  handleSubmit: () => dispatch(createInvitationCode())
});

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);
