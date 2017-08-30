import Account from './models/account';
import Contacts from './models/contacts';
import Projects from './models/projects';
import Transfers from './models/transfers';

class Api {
  constructor() {
    this.account = Account;
    this.contacts = Contacts;
    this.projects = Projects;
    this.transfers = Transfers;
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
