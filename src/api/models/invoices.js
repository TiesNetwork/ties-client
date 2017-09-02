import transform from '../utils/transform';

class Invoices {
  static async create(data) {
    const invoice = await Client.Invoice.createNew(Invoices.fromJson({
      ...data,
      amount: data.sum,
      recepient: data.recipient.address
    }));
    const result = await invoice.saveToDB();

    return Invoices.toJson(invoice);
  }

  static async get() {
  }

  static toJson(data) {
    const fields = ['address', 'amount', 'comment', 'currency', 'recipient'];
    return transform(fields, data);
  }

  static fromJson(data) {
    const fields = ['amount', 'comment', 'currency', 'recepient'];
    return transform(fields, data, true);
  }
}

export default Invoices;
