import Users from './users';

class Account {
  /**
   * @param {string} password
   */
  static async create(password) {
    let response = await Client.createUserNew()
        response = {
          ...response,
          ...await Account.setPassword(password)
        }

    return {
      users: [Users.toJson(response.user)],
      wallets: [{ ...response.wallet }]
    }
  }

  /**
   * @return {Promise.<{ETH: number, TIE: number}>}
   */
  static async getBalance() {
    const ETH = await Client.user.getNativeBalance();
    const TIE = await Client.user.getTieBalance();

    return {
      ETH: ETH.toNumber() / Math.pow(10, 18),
      TIE: TIE.toNumber() / Math.pow(10, 18)
    };
  }

  /**
   * @param {string} password
   */
  static async login(password) {
    const response = await Client.createUserDecrypt(localStorage.getItem('token'), password)

    return {
      users: [Users.toJson(response.user)],
      wallets: [{ ...response.wallet }]
    }
  }

  /**
   * @param {string} phrase
   * @param {string} password
   */
  static async recover(phrase, password) {
    let response = await Client.createUserFromPrivateKey(phrase)
        response = {
          ...response,
          ...await Account.setPassword(password)
        }

    return {
      users: [Users.toJson(response.user)],
      wallets: [{ ...response.wallet }]
    }
  }

  static async setInfo(values) {
    const user = Client.user;
    user.user = {
      ...user.user,
      ...Users.fromJson(values)
    };

    await user.saveToDB();

    return Users.toJson(user.user);
  }

  /**
   * @param {string} newPassword
   * @param {string=} oldPassword
   */
  static async setPassword(newPassword, oldPassword) {
    await Client.wallet.setPassword(newPassword, oldPassword)
    const response = await Client.wallet.encrypt()

    localStorage.setItem('address', Client.wallet.address)
    localStorage.setItem('token', response)

    return {
      wallets: [{ ...Client.wallet }]
    }
  }
}

export default Account
