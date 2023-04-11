const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
Since we are not using 'this' in a function, it references the
global object.

Since the window object doens't have a firstName or lastName property,
both thisfirstName and this.lastName evlaute to undefined. When we
add undefined to undeifned the result is NaN, thus lilne 7 outputs NaN


*/
