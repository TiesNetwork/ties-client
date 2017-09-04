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

    return (incomingInvoices || []).concat(outgoingInvoices).map(({ invoice, status }) => {
      const data = Invoices.toJson(invoice);

      return {
        ...data,
        amount: data.amount.toNumber(),
        date: invoice.__timestamp.toNumber(),
        id: data.id.toString(),
        recipient: data.recepient,
        transaction: status && status.transaction
      }
    });
  }

  static async setTransaction(invoiceId, tx) {
    const invoices = await Client.Invoice.getIncoming(Client.wallet.address);
    const invoice = invoices.filter(({ invoice }) => invoice.id == invoiceId)[0];
    await invoice.setTransaction(tx);

    const result = await invoice.saveToDB(tx);
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
