class Invoices {
  static async create(data) {
    const invoice = await Client.Invoice.createNew(Invoices.fromJson({
      ...data,
      recipient: data.recipient.address
    }));
    const result = await invoice.saveToDB();

    return Invoices.toJson(invoice.invoice);
  }

  static async get() {
    const incomingInvoices = await Client.Invoice.getIncoming(Client.wallet.address);
    const outgoingInvoices = await Client.Invoice.getOutgoing(Client.wallet.address);

    return (incomingInvoices || []).concat(outgoingInvoices).map(({ invoice, status }) => {
      let data = Invoices.toJson(invoice);

      if (status && status.transaction) {
        data.transaction = {
          address: invoice.recepient,
          sum: invoice.amount.toNumber(),
          tx: status.transaction
        };
      }

      return data;
    });
  }

  static async setTransaction(invoiceId, tx) {
    const invoices = await Client.Invoice.getIncoming(Client.wallet.address);
    const invoice = invoices.filter(({ invoice }) => invoice.id == invoiceId)[0];
    await invoice.setTransaction(tx);

    const result = await invoice.saveToDB(tx);
  }

  static toJson({ __address, __timestamp, amount, comment, currency, id, recepient }) {
    return {
      comment, currency,
      address: __address,
      date: __timestamp && __timestamp.toNumber(),
      id: id.toString(),
      recipient: recepient,
      sum: amount.toNumber ? amount.toNumber() : amount
    };
  }

  static fromJson({ comment, currency, recipient, sum }) {
    return {
      comment, currency,
      amount: sum,
      recepient: recipient
    };
  }
}

export default Invoices;
