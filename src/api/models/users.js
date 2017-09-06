class Users {
  /**
   * @param {string} address
   * @return {number}
   */
  static async getRating(address) {
    const user = await Client.User.createFromDB(address);
    return user.getRating();
  }

  static toJson({
    __address,
    company, country,
    keywords, name, photo,
    position, surname
  }) {
    return {
      address: __address,
      company, country,
      keywords, name, photo,
      position, surname
    }
  }

  static fromJson({
    address,
    company, country,
    keywords, name, photo,
    position, surname
  }) {
    return {
      __address: address,
      company, country,
      keywords, name, photo,
      position, surname
    }
  }
}

export default Users;
