function newPerson(name) {
  let obj = {
    name,
  };

  Object.defineProperties(obj, {
    log: {
      value: function () { console.log(this.name) },
      writable: false,
    },
  });

  return obj;
}

let me = newPerson('Shane Riley');
me.log();     // => Shane Riley
me.log = function () { console.log('Amanda Rose'); };
me.log();     // => Shane Riley
