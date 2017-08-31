class Transfers {
  /**
   * @param {string} address
   * @param {number|string} sum
   * @return {Promise.<void>}
   */
  static async send(address, sum) {
    const result = await Client.user.transfer(address, Client.BC.web3.toWei(sum, 'ether'));

    return result.map(transfer => ({
      address: address,
      tx: transfer.tx,
      sum: sum
    }));
  }
}

export default Transfers;
