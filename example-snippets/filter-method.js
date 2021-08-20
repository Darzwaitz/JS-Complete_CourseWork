// filter OUT the elements
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// create array of deposits
const deposits = movements.filter(function (mov) {
    // return a boolean
    return mov > 0;
});

console.log(movements); // Array(8) [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(deposits); // Array(5) [ 200, 450, 3000, 70, 1300 ]

// equiv with forof (filter is more beneficial as chaining can be implemented)
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); // Array(5) [ 200, 450, 3000, 70, 1300 ]

// withdrawals
const withdrawals = movements.filter(transac => transac < 0);

console.log(withdrawals); // Array(3) [ -400, -650, -130 ]