class Wallets {
  /**
   * @param phrase
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
