const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// muliply all elements by eurToUsd

// NB. map will return - current element, index of that element and the array it's working on
const movementsUSD = movements.map(mov => mov * eurToUsd);
// return 'test'; // Array(8) [ "test", "test", "test", "test", "test", "test", "test", "test" ]

// console.log(movements);
console.log(movementsUSD); // Array(8) [ 220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002 ]

// alt with for of
const movementsUsdArray = [];
for (const mov of movements) movementsUsdArray.push(mov * eurToUsd);
console.log(movementsUsdArray); // same as above

const movementsDescriptions = movements.map(
    (mov, i) =>
        `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);
// Array(8)
// 0: "Movement 1: You deposited 200"
// 1: "Movement 2: You deposited 450"
// 2: "Movement 3: You withdrew 400"
// 3: "Movement 4: You deposited 3000"
// 4: "Movement 5: You withdrew 650"
// 5: "Movement 6: You withdrew 130"
// 6: "Movement 7: You deposited 70"
// 7: "Movement 8: You deposited 1300"
// length: 8