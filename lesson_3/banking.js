function makeBank() {
  let accounts = [];

  function makeAccount(number) {
    let balance = 0;
    let transactions = [];

    return {
      deposit(value) {
        balance += value;
        this.addTransaction('deposit', value);
        return value;
      },
      withdraw(value) {
        if (value > balance) {
          value = balance;
        }

        balance -= value;
        this.addTransaction('withdraw', value)
        return value;

      },
      addTransaction(type, amount) {
        let transaction = { type, amount };
        transactions.push(transaction);
      },
      balance() {
        return balance;
      },
      number() {
        return number;
      },
      transactions() {
        return transactions;
      },
    };
  }

  return {
    openAccount() {
      let accountNumber = accounts.length + 101;
      let account = makeAccount(accountNumber);
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      source.balance -= amount;
      destination.balance += amount;
      return amount;
    },
  }
}





