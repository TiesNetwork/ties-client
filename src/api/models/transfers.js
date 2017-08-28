class Transfers {
  /**
   * @param {string} address
   * @param {number|string} sum
   * @return {Promise.<void>}
   */
  static async send(address, sum) {
    const response = await Client.user.transfer(address, Client.BC.web3.toWei(sum, 'ether'));

    return response;
  }
}

export default Transfers;
