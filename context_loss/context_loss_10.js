let foo = {
  a: 0,
  incrementA() {
    let increment = function () {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
};

foo.incrementA();
console.log(foo.a);
