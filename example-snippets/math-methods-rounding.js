'use strict';
console.log(Math.sqrt(25)); // 5

// exponentiation can handle BigInt
console.log(2 ** 5); // 32
// Math.pow wont, though does the same thing
console.log(Math.pow(2, 5)); // 32 

console.log(Math.max(8,77,88)); // 88
// coerces to number
console.log(Math.max(8,'77',88)); // 88

console.log(Math.min(22,7,'44',8)); // 7

console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// get value between 1 & 6
console.log(Math.trunc(Math.random() * 6) + 1);

// random number between 2 values
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10,20));

// NB. these methods can coerce

// Rounding integers
console.log(Math.trunc(23.3)); // 23

// round to nearest
console.log(Math.round(23.4)); // 23

// round up
console.log(Math.ceil(23.1)); // 24

// round down
console.log(Math.floor(7.7)); // 7

// .floor works better than .trunc, as it works om negative numbers too
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals

// NB. toFixed() returns String
console.log((2.7).toFixed(0)); // 3 
console.log((2.7).toFixed(3)); // 2.700 
console.log((2.345).toFixed(2)); // 2.35
// coerce to number
console.log(+(2.345).toFixed(2)); // 2.35