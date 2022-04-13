// Exporting
console.log('Exporting module');

// Blocking code
console.log('Start fetching userz');

await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 247;
const totalQuantity = 24;

export { totalPrice, totalQuantity as qt };
