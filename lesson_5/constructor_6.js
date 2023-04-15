function createObject(obj) {
  function ObjectCreator() { }
  ObjectCreator.prototype = obj;
  return new ObjectCreator();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
