'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];


// SLICE

// includes index it starts on - continues to end with 1 param specified
// NB. does not mutate
console.log(arr.slice(2)); // Array(3) [ "c", "d", "e" ]
// does not include last index specified
console.log(arr.slice(2, 4)); // Array [ "c", "d" ]

// returns last 2 index values
console.log(arr.slice(-2)); // Array [ "d", "e" ]

// returns last index value
console.log(arr.slice(-1)); // Array [ "e" ]

// start at index 1 - return until last 2 index values (not included)
console.log(arr.slice(-1)); // Array [ "e" ]

// clones array
console.log(arr.slice()); // Array(5) [ "a", "b", "c", "d", "e" ]

// same with spread
console.log([...arr]); // Array(5) [ "a", "b", "c", "d", "e" ]

// returns string if not within array brackets
console.log(...arr); // a b c d e

// SPLICE
// NB. mutates
// console.log(arr.splice(2)); // Array(3) [ "c", "d", "e" ]
// console.log(arr); // Array [ "a", "b" ]

// return the array without the last element
arr.splice(-1);
console.log(arr); // Array(4)["a", "b", "c", "d"]

// index start & how many elements to delete as 2nd arg
arr.splice(1, 2);
console.log(arr); // Array [ "a", "d" ]

// REVERSE
// NB. Mutates

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // Array(5) [ "f", "g", "h", "i", "j" ]
console.log(arr2); // Array(5) [ "f", "g", "h", "i", "j" ]

// CONCAT
// NB. does not mutate
const letters = arr.concat(arr2);
console.log(letters); // Array(10) [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ]

// same with spread
console.log([...arr, ...arr2]); // Array(10) [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ]

// JOIN
// does not mutate

console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
console.log(letters); // Array(10) [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j" ]