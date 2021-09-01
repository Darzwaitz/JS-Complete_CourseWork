'use strict';
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

// combine arrays to one (all movements above 0)
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum); // 25180

// how many deposits with at least 1000
// const numDeposits1000 = accounts
//     .flatMap(acc => acc.movements)
//     .filter(mov => mov >= 1000)
//     .length;

// alt way with reduce
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
    // NB left alligned increment gives the proper answer
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000); // 6

// advanced reduce method
// create an object with sum of deposits and withdrawals
// const sums = accounts
const { deposits, withdrawals } = accounts // with destructuring
    .flatMap(acc => acc.movements)
    .reduce((sums, cur) => {
        // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
        // Alt
        sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
        return sums;
    }, { deposits: 0, withdrawals: 0 });

// console.log(sums); // Object { deposits: 25180, withdrawals: -7340 }
// with destructuring
console.log(deposits, withdrawals); // 25180 -7340

// convert a title, with exceptionz
const convertTitleCase = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
    const exceptionz = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => (exceptionz.includes(word) ? word : capitalize(word)))
        .join(' ');
    return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title')); // This Is a Nice Title
console.log(convertTitleCase('this is a LONG title but not too long')); // This Is a Long Title but Not Too Long
console.log(convertTitleCase('and here is another title with an EXAMPLE')); // And Here Is Another Title with an Example