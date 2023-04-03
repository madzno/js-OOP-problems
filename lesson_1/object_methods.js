let me = {
  id: 1,
  firstName: 'Maddy',
  lastName: 'W',
}

let friend = {
  id: 2,
  firstName: 'Emily',
  lastName: 'B',
}


let people = {
  collection: [me, friend],
  generatePersonId: function () {
    if (this.collection.length === 0) {
      return 1;
    }

    let lastObject = this.collection[this.collection.length - 1];

    let lastId = lastObject['id'];
    return lastId + 1;
  },
  fullName: function (person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function () {
    this.collection.forEach(this.fullName);
  },
  add: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let personWithId = Object.assign({ 'id': this.generatePersonId() }, person);

    this.collection.push(personWithId);
  },
  getIndex: function (idNum) {
    let index = -1;

    this.collection.forEach(function (comparator, i) {
      if (comparator.id === idNum) {
        index = i;
      }
    });

    return index;
  },
  isInvalidPerson: function (person) {
    return typeof person.firstName !== 'string' ||
      typeof person.lastName !== 'string';
  },
  remove: function (idNum) {
    let index = this.getIndex(idNum);

    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },
  get: function (idNum) {
    let index = this.getIndex(idNum);

    if (index === -1) {
      return;
    }

    return this.collection[index];
  },
  update: function (idNum, person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(idNum);

    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.add({ firstName: 'Erin', lastName: 'OC' });
people.update(5, { firstName: 'Erin', lastName: 'OC' });
console.log(people.collection);
people.remove(4);
console.log(people.collection);

