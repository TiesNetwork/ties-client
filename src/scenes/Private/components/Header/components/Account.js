const HeaderAccount = ({ amount, currency }) => (
  <div className={styles.HeaderAccount}>
    <div className={styles.HeaderAccountCurrency}>
      {currency}:
    </div>

    <div
      className={styles.HeaderAccountAmount}
      title={amount}
    >
      {amount.toFixed(((amount ^ 0) === amount) ? 0 : 2)}
    </div>
  </div>
);

export default HeaderAccount;
