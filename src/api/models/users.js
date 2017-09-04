class Users {
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
