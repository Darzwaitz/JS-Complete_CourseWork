'use strict';

// Data
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log([1, 2, 3, 4, 5, 6, 7]); // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]

const arr = [1, 2, 3, 4, 5, 6, 7];

// new array constructor initiated like this, with just one arg passed in, will create empty slots within that array, of that number
const x = new Array(7);
const x2 = new Array(7);
console.log(x); // Array(7) [ <7 empty slots> ]

// Cannot call map etc on this array- only useful method is fill
x.fill(1);
console.log(x); // Array(7) [ 1, 1, 1, 1, 1, 1, 1 ]

// add number 1 - start at index 3 - finish at index 5
// if the last param is ommited, it acts like slice, and will populate all the way to the end
// x2.fill(1, 3); // Array(7) [ <3 empty slots>, 1, 1, 1, 1 ]
x2.fill(1, 3, 5);
console.log(x2); // Array(7) [ <3 empty slots>, 1, 1, <2 empty slots> ]

arr.fill(23, 2, 6);
console.log(arr); // Array(7) [ 1, 2, 23, 23, 23, 23, 7 ]

// Array.from
// here, Array is a function, and from is the method
// 2nd param acts the same way as map
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // Array(7) [ 1, 1, 1, 1, 1, 1, 1 ]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]

// caculate array total with reduce
const movementsUi = movements.reduce((acc, el) => acc + el, 0);
console.log(movementsUi); // 3840