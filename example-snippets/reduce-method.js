// reduce callback params (1. accumulator, 2.current element, 3.index, 4.array being worked on)
// the initial accumulator value is included as the last param after the callback function

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const balance = movements.reduce((acc, cur, i, arr) => {
    console.log(`Iteration ${i}: ${acc}`);
    // Iteration 0: 0 
    // Iteration 1: 200 
    // Iteration 2: 650 
    // Iteration 3: 250 
    // Iteration 4: 3250 
    // Iteration 5: 2600 
    // Iteration 6: 2470 
    // Iteration 7: 2540

    // return the accumulated value on each iteration
    return acc + cur;
}, 0);
console.log(balance); // 3840

// equiv with forof
let balance2 = 0;
for (const mov of movements) balance2 += mov;

console.log(balance2); // 3840

// find max value
const max = movements.reduce((acc, mov) => {
    if (acc > mov)
        return acc;
    else
        return mov;
}, movements[0]);
console.log(max); // 3000