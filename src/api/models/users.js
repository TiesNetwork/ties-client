class Users {
  static async getRating(address) {
    const user = await Client.User.createFromDB(address);
    return user.getRating();
  }

  static async get(address) {
    return await Client.User.createFromDB(address);
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
