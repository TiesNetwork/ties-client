class Account {
  /**
   * @param {string} password
   */
  static async create(password) {
    let response = await Client.createUserNew()
        response = {
          ...response,
          ...await Account.setPassword(password)
        }

    return {
      users: [{ ...response.user }],
      wallets: [{ ...response.wallet }]
    }
  }

  /**
   * @param {string} password
   */
  static async login(password) {
    const response = await Client.createUserDecrypt(localStorage.getItem('token'), password)

    return {
      users: [{ ...response.user }],
      wallets: [{ ...response.wallet }]
    }
  }

  /**
   * @param {string} phrase
   * @param {string} password
   */
  static async recover(phrase, password) {
    let response = await Client.createUserFromPrivateKey(phrase)
        response = {
          ...response,
          ...await Account.setPassword(password)
        }

    return {
      users: [{ ...response.user }],
      wallets: [{ ...response.wallet }]
    }
  }

  static async setInfo(values) {
    const user = Client.user

    user.user = { ...user.user, ...values }
    await user.saveToDB()

    return { ...user.user }
  }

  /**
   * @param {string} newPassword
   * @param {string=} oldPassword
   */
  static async setPassword(newPassword, oldPassword) {
    await Client.wallet.setPassword(newPassword, oldPassword)
    const response = await Client.wallet.encrypt()

    localStorage.setItem('address', Client.wallet.address)
    localStorage.setItem('token', response)

    return {
      wallets: [{ ...Client.wallet }]
    }
  }
}

export default Account
