function makeList() {
  let items = [];

  return {
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function (item) {
          console.log(item);
        });
      }
    },
    add(newItem) {
      items.push(newItem);
      console.log(newItem + ' added!');
    },
    remove(newItem) {
      let indexOfItem = items.indexOf(newItem);
      items.splice(indexOfItem, 1);
      console.log(newItem + ' removed!');
    }
  };
}

let list = makeList();
list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();
