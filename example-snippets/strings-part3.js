'use strict';

console.log('a+very+nice+string+here'.split('+'));
// Array(5) [ "a", "very", "nice", "string", "here" ]
// ​0: "a"
// ​1: "very"
// ​2: "nice"
// ​3: "string"
// ​4: "here"

console.log('Darzer reilly'.split(' '));

// with destructuring
const [firstName, lastName] = 'Darzer reilly'.split(' ');

// the join method added on the end change this so it's not an array anymore
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Mr. Darzer REILLY
// console.log((Array.isArray(newName)));

const passenger = 'hannah ann mary shmith';

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        //alternate way
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};

capitalizeName(passenger); // Hannah Ann Mary Shmith

// Padding
const message = 'Go to gate 22';
// padStart will add the specified character(s), and the 25 here is the specified TOTAL length of the value returned
console.log(message.padStart(25, '+')); // ++++++++++++Go to gate 22
console.log('Darz'.padStart(25, '*'));  // *********************Darz
// padEnd here also specifies TOTAL length of returned value (inc. given value)
console.log('Darz'.padStart(10, '+').padEnd(20, '-')); // ++++++Darz----------

const maskCreditCard = function (number) {
    // const str = String() // one way of converting the input to string
    // this is another technique - by coecing the value to string
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(43215788924)); // *******8924
console.log(maskCreditCard('43215788924')); // *******8924

// Repeat
const message2 = 'Bad weather... All departures Delayed...';
console.log(message2.repeat(4));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5); // There are 5 planes in line ✈✈✈✈✈
planesInLine(2); // There are 2 planes in line ✈✈
planesInLine(14); //There are 14 planes in line ✈✈✈✈✈✈✈✈✈✈✈✈✈✈