function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// more code

/*
No, because the array assigned to the variable `array` is still
referenced by the `pushIt()` function's closure. Since the array
is mutated but not reassigned in the `pushit` function body,
the same array is referenced by the `pushit` function's closure.
*/
