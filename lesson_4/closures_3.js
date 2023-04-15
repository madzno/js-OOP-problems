function makeMultipleLister(num) {
  return function () {
    for (let start = num; start < 100; start += 1) {
      if (start % num === 0) {
        console.log(start);
      }
    }
  };
}

let lister = makeMultipleLister(13);
lister();

// > let lister = makeMultipleLister(13);
// > lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91
