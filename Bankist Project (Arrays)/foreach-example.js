'use strict';
// nice forEach and for of comparison and best use cases

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//for of loop 

for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        // Math.abs 'absolute' to return absolute value - without operand sign
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}
// You deposited 200
// You deposited 450 
// You withdrew 400 
// You deposited 3000 
// You withdrew 650 
// You withdrew 130 
// You deposited 70 
// You deposited 1300

console.log('---forEach----');
// same with forEach - forEach will the element passed in, it's index position and the array of those elements
// NB. you cannot break out of a forEach loop
movements.forEach(function (mov, i, arr) {
    if (mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        // Math.abs 'absolute' to return absolute value - without operand sign
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    }
});
// You deposited 200
// You deposited 450 
// You withdrew 400 
// You deposited 3000 
// You withdrew 650 
// You withdrew 130 
// You deposited 70 
// You deposited 1300