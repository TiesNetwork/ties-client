import Account from './models/account'

class Api {
  constructor() {
    this.account = Account

    this.user = null
    this.wallet = null
  }

  /**
   * @param {string} text
   */
  async search(text) {
    const response = await Client.User.search(text)

    return {
      users: response.map(user => ({ ...user.user }))
    }
  }
}

export default Api
