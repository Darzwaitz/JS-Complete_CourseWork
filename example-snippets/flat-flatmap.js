'use strict';

// flat & flatMap are ES2019

// Data
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// FLAT - combines arrays within arrays, to one level as default
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// to go into deeper nesting, an arg needs to be passed in
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // Array(6) [ (2) […], 3, 4, (2) […], 7, 8 ]

// arg is passed in here
const arrDeep2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// calculate overall balance of all accounts
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance); // 17840

// with chaining
const overallBalance = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840

// flatMap combines a flat and a map method! (better for performance)
// flatMap only goes 1 level deep nesting - use flat if deeper nesting needed
const overallBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2); // 17840