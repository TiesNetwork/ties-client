import Account from './models/account';
import Contacts from './models/contacts';
import Invitations from './models/invitations';
import Invoices from './models/invoices';
import Messages from './models/messages';
import Projects from './models/projects';
import Transfers from './models/transfers';
import Users from './models/users';

class Api {
  constructor() {
    this.account = Account;
    this.contacts = Contacts;
    this.invitations = Invitations;
    this.invoices = Invoices;
    this.messages = Messages;
    this.projects = Projects;
    this.transfers = Transfers;
    this.users = Users;
  }

  /**
   * @param {string} text
   */
  async search(text) {
    const response = await Client.User.search(text);

    return {
      users: response.map(user => Users.toJson(user.user))
    };
  }
}

export default Api
