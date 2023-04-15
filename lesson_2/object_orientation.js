function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setProductPrice(product, newPrice) {
      if (newPrice <= 0) {
        console.log('Invalid Price. Please enter a price greater than 0.')
      }

      this.price = newPrice;
    },
    describeProduct(product) {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let paint = createProduct(2, 'Paint', 10, 10);
let rake = createProduct(3, 'Rake', 5, 25);

console.log(scissors);
