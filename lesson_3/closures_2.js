function makeList() {
  let list = [];
  return function (item = 'outputList') {
    if (item === 'outputList' && list.length === 0) {
      console.log('The list is empty.');
    } else if (item === 'outputList') {
      list.forEach(entry => console.log(entry));
    } else if (list.includes(item)) {
      let itemsIndex = list.indexOf(item);
      list.splice(itemsIndex, 1);
      console.log(`${item} removed!`)
    } else {
      list.push(item);
      console.log(`${item} added!`)
    }
  }
}

let list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();
