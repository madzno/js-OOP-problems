function createInvoice(services = {}) {
  let phone = services.phone || 3000;
  let internet = services.internet || 5500

  return {
    phone,
    internet,
    payments: [],
    total() {
      return this.phone + this.internet;
    },
    addPayment(paymentObj) {
      this.payments.push(paymentObj);
    },
    addPayments(paymentsArr) {
      paymentsArr.forEach(payment => {
        this.addPayment(payment);
      });
    },
    totalPayments() {
      let length = this.payments.length;
      let total = 0;

      for (let index = 0; index < length; index += 1) {
        let currentObj = this.payments[index];
        total += currentObj.total();
      }

      return total;
    },
    amountDue() {
      return this.total() - this.totalPayments();
    },
  }
}

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return this.amount || (this.phone + this.internet);
    },
  }
}


let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
