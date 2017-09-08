class Transfers {
  /**
   * @param {string} address
   * @param {string} currency
   * @param {number|string} sum
   * @return {Promise.<void>}
   */
  static async send(address, currency = 'TIE', sum) {
    const result = await Client.user.transfer(address,
      currency == 'TIE' && Client.BC.web3.toWei(sum, 'ether'),
      currency == 'ETH' && Client.BC.web3.toWei(sum, 'ether')
    );

    return {
      address: address,
      currency: currency,
      tx: result[0].tx,
      sum: sum
    };
  }
}

export default Transfers;
