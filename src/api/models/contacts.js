import Users from './users';

class Contacts {
  /**
   * @param {string} address
   */
  static async add(address) {
    await Client.user.addContact(address);
    const result = await Client.user.saveToDB();

    return address;
  }

  /**
   * @param {string} address
   */
  static async delete(address) {
    console.log(Client.user);
    await Client.user.removeContact(address);
    console.log(Client.user);
    const result = await Client.user.saveToDB();

    return address;
  }

  /**
   * @param {string} address
   */
  static async get(address) {
    const user = await Client.User.createFromDB(address);
    console.log(user);
    const contacts = await user.getContacts();
console.log(contacts);
    return contacts.map(raw => Users.toJson(raw.user));
  }

}

export default Contacts;
