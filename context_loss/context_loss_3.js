let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

// let getTurkDescription = function () {
//   return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
// }.bind(turk);

function getDescription() {
  return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
}

let getTurkDescription = getDescription.bind(turk);

logReturnVal(getTurkDescription);
