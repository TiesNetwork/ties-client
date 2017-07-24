class Api {
  constructor() {
    this.user = null
    this.wallet = null
  }

  async login(password) {
    const response = await Client.createUserDecrypt(localStorage.getItem('token'), password)

    this.user = response.user
    this.wallet = response.wallet

    return {
      wallets: [ this.wallet.toJson() ]
    }
  }
}

export default Api
