class Account {
  static async setInfo(values) {
    const user = Client.user

    user.user = { ...user.user, ...values }
    await user.saveToDB()

    return {
      users: [{ ...user.user }]
    }
  }


  /**
   * @param {string} newPassword
   * @param {string=} oldPassword
   */
  static async setPassword(newPassword, oldPassword) {
    await Client.wallet.setPassword(newPassword, oldPassword)
    const response = await Client.wallet.encrypt()

    localStorage.setItem('token', response)

    return {
      wallets: [{ ...Client.wallet }]
    }
  }
}

export default Account
