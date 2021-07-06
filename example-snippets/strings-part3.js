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