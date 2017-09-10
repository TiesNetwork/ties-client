import Users from './users';

class Contacts {
  static async add(address) {
    await Client.user.addContact(address);
    const result = await Client.user.saveToDB();

    return address;
  }

  static async delete(address) {
    await Client.user.removeContact(address);
    const result = await Client.user.saveToDB();

    return address;
  }

  static async get(address) {
    const user = await Client.User.createFromDB(address);
    const contacts = await user.getContacts();

    return contacts.map(raw => Users.toJson(raw.user));
  }
}

export default Contacts;
