class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string
  }

  static TYPE = {
    ADD_CONTACT: 'AddContact',
    CONTACTS: 'Contacts',
    COPY: 'Copy',
    DELETE_CONTACT: 'DeleteContact',
    INVOICE: 'Invoice',
    INVOICES: 'Invoices',
    LOCATION: 'Location',
    LOGO: 'Logo',
    MESSAGE: 'Message',
    MESSAGES: 'Messages',
    SEARCH: 'Search'
  };

  render() {
    return <i className={classNames(this.props.className, styles.Icon, styles[`Icon${this.props.type}`])} />
  }
}

export default Icon
