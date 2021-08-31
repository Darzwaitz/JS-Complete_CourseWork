'use strict';
// NB. sort mutates the array
// Data
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const owners = ['Darz', 'Ciarz', 'John'];
// sort will sort strings by default with no paramz
console.log(owners.sort()); // Array(3) [ "Ciarz", "Darz", "John" ]

// Numbers
console.log(movements);
// sorted in order of number/string (minus will always come first)
console.log(movements.sort()); // Array(8) [ -130, -400, -650, 1300, 200, 3000, 450, 70 ]

// using sort's compare callback function
// the function will be iterated until all conditions are met, and thus all elements are sorted

// sort in ascending
movements.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    // otherwize, return 0
});
console.log(movements); // Array(8) [ -650, -400, -130, 70, 200, 450, 1300, 3000 ]

// sort in descending
movements.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    // otherwize, return 0
});
console.log(movements); // Array(8) [ 3000, 1300, 450, 200, 70, -130, -400, -650 ]

// refactored to:

// sort in ascending
movements2.sort((a, b) => a - b);
console.log(movements2); // Array(8) [ -650, -400, -130, 70, 200, 450, 1300, 3000 ]

// sort in descending
movements2.sort((a, b) => b - a);
console.log(movements2); // Array(8) [ 3000, 1300, 450, 200, 70, -130, -400, -650 ]