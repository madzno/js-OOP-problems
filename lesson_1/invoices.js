let invoices = {
  unpaid: [],
  paid: [],
  add: function (name, amount) {
    this.unpaid.push({
      name,
      amount
    });
  },
  totalDue: function () {
    let amounts = this.unpaid.map(obj => obj.amount);
    return amounts.reduce((total, current) => total + current);
  },
  payInvoice: function (name) {
    let newUnpaid = [];

    this.unpaid.forEach(obj => {
      if (obj.name === name) {
        this.paid.push(obj);
      } else {
        newUnpaid.push(obj);
      }
    });

    this.unpaid = newUnpaid;
  },
  totalPaid: function () {
    let amounts = this.paid.map(obj => obj.amount);
    return amounts.reduce((total, current) => total + current);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.unpaid);
console.log(invoices.totalDue());
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.unpaid);
console.log(invoices.paid);
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
