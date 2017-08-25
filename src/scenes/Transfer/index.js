/** Components **/
import Block from '../../components/Block'
import TransferForm from './components/Form'

class Transfer extends Component {
  static propTypes = {
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
            initialValues={{...this.props,
              address: this.props.recipient && this.props.recipient.__address
            }}
          />
        </Block>
      </div>
    )
  }
}

export default connect((state, ownProps) => ({
  recipient: state.entities.users[ownProps.location.query.to]
}))(Transfer)
