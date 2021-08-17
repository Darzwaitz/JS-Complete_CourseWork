'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/

const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    // splice args - 1st element to start, 2nd how many to remove
    dogsJuliaCorrected.splice(0, 1);
    // splice - 2 off the end
    dogsJuliaCorrected.splice(-2);
    // alt
    // slice - start index, all the way to 2nd arg (NOT including that arg)
    // dogsJulia.slice(1, 3); 
    // console.log(dogsJuliaCorrected); // Array [ 5, 2 ]

    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs); // Array(7) [ 5, 2, 4, 1, 15, 8, 3 ]

    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is only ${dog} ${dog < 2 ? 'year' : 'years'} old, and is still a puppy 🐶`);
        }
    })
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// Dog number 1 is an adult, and is 5 years old
// Dog number 2 is only 2 years old, and is still a puppy 🐶 
// Dog number 3 is an adult, and is 4 years old 
// Dog number 4 is only 1 year old, and is still a puppy 🐶 
// Dog number 5 is an adult, and is 15 years old 
// Dog number 6 is an adult, and is 8 years old 
// Dog number 7 is an adult, and is 3 years old