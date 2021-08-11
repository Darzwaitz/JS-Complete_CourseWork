'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

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