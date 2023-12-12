let Account = (function () {

  function anonymize() {
    let sequence = ''
    const requiredLength = 16;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomGenerator = () => Math.floor(Math.random() * characters.length)


    for (let counter = 0; counter < requiredLength; counter += 1) {
      sequence += characters[randomGenerator()];
    }

    return sequence;
  }

  return {
    init(email, password, first, last) {
      this.address = email;
      this.password = password;
      this.first = first;
      this.last = last;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(password) {
      if (password !== this.password) {
        return 'Invalid Password';
      }

      this.displayName = anonymize();
      return true;
    },

    resetPassword(oldPassword, newPassword) {
      if (oldPassword !== this.password) {
        return 'Invalid Password';
      }

      this.password = newPassword;
      return true;
    },

    firstName(password) {
      if (password !== this.password) {
        return 'Invalid Password';
      }

      return this.first;
    },

    lastName(password) {
      if (password !== this.password) {
        return 'Invalid Password';
      }

      return this.last;
    },

    email(password) {
      if (password !== this.password) {
        return 'Invalid Password';
      }

      return this.address;
    },
  }

})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

