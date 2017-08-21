import Account from './models/account'
import Projects from './models/projects'

class Api {
  constructor() {
    this.account = Account
    this.projects = Projects

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
