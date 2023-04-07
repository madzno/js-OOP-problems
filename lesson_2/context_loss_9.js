// let foo = {
//   a: 0,
//   incrementA() {
//     let self = this;

//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

// let foo = {
//   a: 0,
//   incrementA() {

//     let increment = function () {
//       this.a += 1;
//     }.bind(this);

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

// let foo = {
//   a: 0,
//   incrementA() {

//     let increment = () => this.a += 1;

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.apply(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
