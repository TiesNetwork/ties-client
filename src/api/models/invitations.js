class Invitations {
  static async create() {
    return await Client.user.invitationCreate();
  }

  /**
   * @return {bool|string}
   */
  static async get() {
    const code = await Client.user.invitationGetLast();
    const isActive = code && await Client.user.invitationCheck(code);

    return isActive && code;
  }

  /**
   * @param {string} code
   */
  static async redeem(code) {
    return await Client.user.invitationRedeem(code);
  }
}

export default Invitations;
