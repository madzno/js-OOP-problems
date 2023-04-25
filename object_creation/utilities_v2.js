(function () {
  findObjects = function (targetObj, currentArr) {
    let searchKeys = Object.keys(targetObj);
    let matches = [];

    for (let index = 0; index < currentArr.length; index += 1) {
      let currentObj = currentArr[index];

      if (searchKeys.every(key => currentObj[key] === targetObj[key])) {
        matches.push(currentObj);
      }
    }

    return matches;
  }

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

      lastIndexOf(value) {
        return element.lastIndexOf(value);
      },

      sample(value) {
        let randomArr = [];

        if (value === undefined) {
          return element[Math.floor(Math.random() * element.length)];
        }

        while (randomArr.length < value) {
          let index = Math.floor(Math.random() * element.length);
          let randomEl = element[index]

          if (!randomArr.includes(randomEl)) {
            randomArr.push(randomEl);
          }

        }

        return randomArr;
      },

      findWhere(searchObj) {
        let matches = findObjects(searchObj, element);

        if (matches.length !== 0) {
          return matches[0];
        }
      },

      where(searchObj) {
        return findObjects(searchObj, element);
      },

      pluck(targetKey) {
        let values = [];

        element.forEach(obj => {
          if (obj[targetKey]) {
            values.push(obj[targetKey]);
          }

        });

        return values;
      },

      keys() {
        return Object.keys(element);
      },

      values() {
        return Object.values(element);
      }
    };

    return u;
  };

  _.range = function (num1, num2) {
    let startingNum = num1;
    let endingNum = num2;

    if (num2 === undefined) {
      startingNum = 0;
      endingNum = num1;
    }

    let arr = [];
    for (let counter = startingNum; counter < endingNum; counter += 1) {
      arr.push(counter);
    }

    return arr;

  };

  _.extend = function () {

  };

  window._ = _;
})();


