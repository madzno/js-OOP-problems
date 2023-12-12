function getDefiningObject(object, propKey) {
  let currentObj = object;

  while (currentObj) {
    if (currentObj.hasOwnProperty(propKey)) {
      return currentObj;
    }

    currentObj = Object.getPrototypeOf(currentObj);
  }

  return null;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null

/*
- Returns the object where the property is found, otherwise returns null
- First see of object.propKey returns undefined, if it does return null
- initialize a currentObj to the object passed in as an argument
- Otherwise, get the prototype of the currentObj (getPrototypeOf)
and initilaize the return value to currentPrototype
- see if the currentPrototype hasOwnProperty of propKey, if it does
return the currentPrototype
- if not re-assign currentObj to the currentPrototype and loop again
*/
