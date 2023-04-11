function myBind(func, context, ...args) {
  return function (...moreArgs) {
    let allArgs = args.concat(moreArgs);
    return func.apply(context, allArgs);
  }
}

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
