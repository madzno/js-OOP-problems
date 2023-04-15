let prot = {};

let foo = Object.create(prot);

console.log(Object.getPrototypeOf(foo) === prot); // true

console.log(prot.isPrototypeOf(foo)); // true
