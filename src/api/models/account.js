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
      users: [{ ...response.user }],
      wallets: [{ ...response.wallet }]
    }
  }

  /**
   * @param {string} password
   */
  static async login(password) {
    const response = await Client.createUserDecrypt(localStorage.getItem('token'), password)

    return {
      users: [{ ...response.user }],
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
      users: [{ ...response.user }],
      wallets: [{ ...response.wallet }]
    }
  }

  static async setInfo(values) {
    const user = Client.user

    user.user = {
      ...user.user,
      __address: Client.wallet.address,
      company: values.company,
      country: values.country,
      keywords: values.keywords,
      name: values.name,
      photo: `0x${values.photo.toString('hex')}`,
      position: values.position,
      surname: values.surname
    }

    await user.saveToDB()

    const data = user.user

    return {
      __address: Client.wallet.address,
      company: data.company,
      country: data.country,
      keywords: data.keywords,
      name: data.name,
      photo: Buffer.from(data.photo.replace(/^0x/, ''), 'hex'),
      position: data.position,
      surname: data.surname
    }
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
