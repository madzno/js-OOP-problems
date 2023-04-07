function makeCounterLogger(num1) {
  return function (num2) {
    if (num1 > num2) {
      for (let larger = num1; larger >= num2; larger -= 1) {
        console.log(larger);
      }
    } else {
      for (let smaller = num1; smaller <= num2; smaller += 1) {
        console.log(smaller);
      }
    }
  }
}


let countlog = makeCounterLogger(5);
countlog(2);
countlog(8);

// > let countlog = makeCounterLogger(5);
// > countlog(8);
// 5
// 6
// 7
// 8
//   > countlog(2);
// 5
// 4
// 3
// 2
