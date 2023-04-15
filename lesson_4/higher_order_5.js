function makeListTransformer(func) {
  return function (array) {
    return array.map(func);
  };
}

let timesTwo = makeListTransformer(function (number) {
  return number * 2;
});

console.log(timesTwo);

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]
