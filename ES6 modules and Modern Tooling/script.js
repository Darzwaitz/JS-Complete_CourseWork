// Importing
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qt);
console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);

console.log(ShoppingCart.cart);
