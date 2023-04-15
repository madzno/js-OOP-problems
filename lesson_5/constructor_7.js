Object.prototype.begetObject = function () {
  function ObjectCreator() { }
  ObjectCreator.prototype = this;
  return new ObjectCreator();
}

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true
