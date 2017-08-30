class Contacts {
  /**
   * @param {string} address
   */
  static async add(address) {
    await Client.user.addContact(address);
    const result = await Client.user.saveToDB();
console.log(result);
    return result;
  }

  /**
   * @param {string} address
   */
  static async delete(address) {
    const response = await Client.user.removeContact(address);
    console.log(response);
    return response;
  }

  /**
   * @param {string} address
   */
  static async get(address) {
    const user = await Client.User.createFromDB(address);
    const contacts = await user.getContacts();
    console.log(contacts);
    return {};
  }
}

export default Contacts;
