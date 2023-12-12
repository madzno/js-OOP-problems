let ItemCreator = (function () {
  let createSkuCode = function (name, category) {
    let words = name.split(' ');
    let first;

    if (words[0].length <= 2) {
      first = words[0] + words[1][0];
    } else {
      first = words[0].slice(0, 3);
    }

    return (first + category.slice(0, 2)).toUpperCase();
  };

  let validName = function (name) {
    let noSpaces = name.replace(/ /g, '');
    return noSpaces.length >= 5;
  };

  let validCategory = function (category) {
    let wordCount = category.split(' ').length;
    return validName(category) && wordCount === 1;
  };

  let validQuantity = function (quantity) {
    return quantity !== undefined && quantity >= 0;
  };

  return {
    init(name, category, quantity) {
      if (!validName(name) || !validCategory(category) ||
        !validQuantity(quantity)) {
        return false;
      }
      this.skucode = createSkuCode(name, category);
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      return this;
    },
  };

})();

let ItemManager = (function () {

  return {
    items: [],
    create(name, category, quantity) {
      let item = Object.create(ItemCreator).init(name, category, quantity);

      if (item) {
        this.items.push(item);
      }

      return item;
    },

    update(code, updateObj) {
      let objToUpdate = this.items.filter(obj => obj.skucode === code)[0];
      let propToUpdate = Object.keys(updateObj);
      propToUpdate.forEach(prop => {
        objToUpdate[prop] = updateObj[prop];
      });

      return objToUpdate;
    },

    inStock() {
      return this.items.filter(obj => obj.quantity !== 0);
    },

    itemsInCategory(targetCategory) {
      return this.items.filter(obj => obj.category === targetCategory);
    },

    delete(code) {
      let indexToDelete = 0;
      this.items.forEach((obj, index) => {
        if (obj.skucode === code) {
          indexToDelete = index;
        }
      });

      this.items.splice(indexToDelete, 1);
      return this.items;
    },
  };
})();

let ReportManager = (function () {
  return {
    init(managerobj) {
      this.items = managerobj;
      return this;
    },

    reportInStock() {
      let inStockItems = this.items.inStock();
      let itemNames = inStockItems.map(obj => obj.name);
      console.log(itemNames.join(','));
    },

    createReporter(code) {
      let selectedObj = this.items.items.filter(obj => obj.skucode === code)[0];
      return {
        itemInfo() {
          let objKeys = Object.keys(selectedObj);
          objKeys.forEach(key => {
            console.log(`${key}: ${selectedObj[key]}`);
          });
        }
      };
    },
  };
})();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
