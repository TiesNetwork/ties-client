class Transfers {
  /**
   * @param {string} address
   * @param {number|string} sum
   * @return {Promise.<void>}
   */
  static async send(address, sum) {
    const response = await Client.user.transfer(address, sum)

    console.log(response)
  }
}

export default Transfers
