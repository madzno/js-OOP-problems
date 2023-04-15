function makeCountry(name, continent) {
  return {
    name,
    continent,
    visited: false,
    getDescription() {
      let haveVisited = this.visited ? ' I have visited ' : " I haven't visited "

      return this.name + ' is located in ' + this.continent + '.' +
        haveVisited + this.name + '.';
    },
    visitCountry() {
      this.visited = true;
    },
  };
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
southAfrica.visitCountry();
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."
