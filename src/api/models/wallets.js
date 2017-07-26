class Wallets {
  static async create() {
    const response = await Client.createUserNew()

    return {
      users: [{ ...response.user }],
      wallets: [{ ...response.wallet }]
    }
  }

  /**
   * @param {string} phrase
   */
  static async recovery(phrase) {
    const response = await Client.createUserFromPrivateKey(phrase)

    return {
      users: [{ ...response.user }],
      wallets: [{ ...response.wallet }]
    }
  }
}

export default Wallets
