(function () {
  let _ = function (element) {
    u = {
      first() {
        return element[0];
      },

      last() {
        return element[element.length - 1];
      },

      without(...args) {
        return element.filter(el => {
          return !args.includes(el);
        });
      },
    };

    return u;
  };

  window._ = _;
})();
