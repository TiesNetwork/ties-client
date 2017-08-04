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

    console.log(response)
  }
}

export default Api
