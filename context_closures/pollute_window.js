// const greeter = (function () {
//   const name = 'Naveed';
//   const greeting = 'Hello';
//   return {
//     message: `${greeting} ${name}!`,
//     sayGreetings() {
//       console.log(this.message);
//     }
//   };
// })();

// greeter.sayGreetings();


const name = 'Naveed';
const greeting = 'Hello';

const greeter = {
  message: (function () {
    const name = 'Naveed';
    const greeting = 'Hello';
    return `${greeting} ${name}!`
  })(),
  sayGreetings() {
    console.log(this.message);
  }
};

greeter.sayGreetings();
