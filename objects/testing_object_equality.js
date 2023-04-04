function hasSameKeys(obj1, obj2) {
  let keys1 = Object.getOwnPropertyNames(obj1).sort();
  let keys2 = Object.getOwnPropertyNames(obj2).sort();

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key, index) => key === keys2[index]);
}

function hasSameValues(obj1, obj2) {
  let keys1 = Object.getOwnPropertyNames(obj1).sort();

  return keys1.every(key => obj1[key] === obj2[key]);
}

function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (!hasSameKeys(obj1, obj2)) {
    return false;
  }

  if (!hasSameValues(obj1, obj2)) {
    return false;
  }

  return true;
}

console.log(objectsEqual({ a: 'foo' }, { a: 'foo' }));                      // true
console.log(objectsEqual({ a: 'foo', b: 'bar' }, { a: 'foo' }));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({ a: 'foo', b: undefined }, { a: 'foo', c: 1 }));  // false
