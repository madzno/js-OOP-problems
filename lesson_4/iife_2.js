function countdown(count) {
  (function (n) {
    for (let i = n; i >= 0; i -= 1) {
      console.log(i);
    }

    console.log('Done!');
  })(count);
}

countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!
