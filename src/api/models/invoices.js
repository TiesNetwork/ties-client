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
    const incomingInvoices = await Client.Invoice.getIncoming(Client.wallet.address);
    const outgoingInvoices = await Client.Invoice.getOutgoing(Client.wallet.address);

    return (incomingInvoices || []).concat(outgoingInvoices).map(({ invoice }) => {
      const data = Invoices.toJson(invoice);

      return {
        ...data,
        amount: data.amount.toNumber(),
        date: invoice.__timestamp.toNumber(),
        id: data.id.toString(),
        recipient: data.recepient
      }
    });
  }

  static toJson(data) {
    const fields = ['address', 'amount', 'comment', 'currency', 'id', 'recepient'];
    return transform(fields, data);
  }

  static fromJson(data) {
    const fields = ['amount', 'comment', 'currency', 'recepient'];
    return transform(fields, data, true);
  }
}

export default Invoices;
