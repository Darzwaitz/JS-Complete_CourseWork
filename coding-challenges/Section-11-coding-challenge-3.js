// rewrite the 'calcAverageHumanAge' function from previous challenge, #2


// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = ages =>
    //convert to human ages - create new array from original array with map
    ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
        // console.log(humanAges);
        .filter(age => age >= 18)
        .reduce((acc, age, _, arr) => acc + age / arr.length, 0);


const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // Array(7) [ 36, 4, 32, 2, 76, 48, 28 ]
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); // Array(7) [ 80, 40, 56, 36, 40, 2, 32 ]
console.log(avg1, avg2); // 44 47.333333333333336