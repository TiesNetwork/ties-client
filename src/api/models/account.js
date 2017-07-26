class Account {
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
