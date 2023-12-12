"use strict";

(function () {
  let findObjects = function (targetObj, currentArr) {
    let searchKeys = Object.keys(targetObj);
    let matches = [];

    for (let index = 0; index < currentArr.length; index += 1) {
      let currentObj = currentArr[index];

      if (searchKeys.every(key => currentObj[key] === targetObj[key])) {
        matches.push(currentObj);
      }
    }

    return matches;
  };

  let _ = function (element) {
    let u = {
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
          let randomEl = element[index];

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
        } else {
          return undefined;
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
      },

      pick(...args) {
        let newObj = {};

        args.forEach(prop => {
          if (element[prop]) {
            newObj[prop] = element[prop];
          }
        });

        return newObj;
      },

      omit(...args) {
        let newObj = {};
        let currentProps = Object.keys(element);

        currentProps.forEach(prop => {
          if (!args.includes(prop)) {
            newObj[prop] = element[prop];
          }
        });

        return newObj;
      },

      has(prop) {
        return Object.prototype.hasOwnProperty.call(element, prop);
      },
    };

    const funcNames = ["isElement", "isArray", "isObject", "isFunction", "isBoolean",
      "isString", "isNumber"];

    funcNames.forEach(method => {
      u[method] = function () { _[method].call(u, element) };
    });

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

  _.extend = function (extendObj, ...args) {
    args.forEach(obj => {
      let keys = Object.keys(obj);

      keys.forEach(key => {
        extendObj[key] = obj[key];
      });
    });

    return extendObj;
  };

  _.isElement = function (obj) {
    return obj && obj.nodeType === 1;
  };

  _.isArray = Array.isArray || function (obj) {
    return Object.getPrototypeOf(obj) === Array.prototype;
  };

  _.isObject = function (obj) {
    return Object.prototype.isPrototypeOf(obj);
  };

  _.isFunction = function (obj) {
    return Object.getPrototypeOf(obj) === Function.prototype;
  };

  _.isBoolean = function (obj) {
    return Object.getPrototypeOf(obj) === Boolean.prototype;
  };

  _.isString = function (obj) {
    return Object.getPrototypeOf(obj) === String.prototype;
  };

  _.isNumber = function (obj) {
    return Object.getPrototypeOf(obj) === Number.prototype;
  };

  window._ = _;
})();
