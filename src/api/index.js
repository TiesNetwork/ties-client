import Account from './models/account'
import Wallets from './models/wallets'

class Api {
  constructor() {
    this.account = Account
    this.wallets = Wallets

    this.user = null
    this.wallet = null
  }

  /**
   * @param {string} password
   */
  async login(password) {
    const response = await Client.createUserDecrypt(localStorage.getItem('token'), password)

    return {
      wallets: [{ ...response.wallet }]
    }
  }
}

export default Api
