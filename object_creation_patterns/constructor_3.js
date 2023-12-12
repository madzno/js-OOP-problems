let ninjaA = (function () {
  function Ninja() { };
  return new Ninja();
})();

let ninjaFunc = ninjaA.constructor;

let ninjaB = new ninjaFunc;

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
