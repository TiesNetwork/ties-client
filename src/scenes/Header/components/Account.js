class HeaderAccount extends Component {
  static propTypes = {
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className={styles.HeaderAccount}>
        {this.props.currency && (
          <div className={styles.HeaderAccountCurrency}>
            {this.props.currency}:
          </div>
        )}

        {this.props.amount && (
          <div className={styles.HeaderAccountAmount}>
            {this.props.amount}
          </div>
        )}
      </div>
    )
  }
}

export default HeaderAccount
