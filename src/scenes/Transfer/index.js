/** Actions **/
import { sendTransfer } from './actions';

/** Components **/
import Block from '../../components/Block';
import TransferForm from './components/Form';

class Transfer extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    recipient: PropTypes.shape({
      __address: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.instanceOf(Buffer),
      surname: PropTypes.string
    })
  }

  render() {
    return (
      <div>
        <Block title="Make a transfer">
          <TransferForm
            initialValues={{
              address: this.props.recipient && this.props.recipient.__address,
              recipient: this.props.recipient
            }}
            onSubmit={this.props.handleSubmit}
          />
        </Block>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  recipient: state.entities.users[ownProps.location.query.to]
});
const mapDispatchToProps = dispatch => ({
  handleSubmit: values => dispatch(sendTransfer(values.address, values.sum))
});

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
