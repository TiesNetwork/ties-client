class Messages {
  /**
   * @param {string} address
   * @param {string} message
   */
  static async send(address, message) {
    const result = await Chat.sendMessage(address, message);
    console.log(result);
  }
}

export default Messages;
