'use strict';

// fix capitalization in name
const passenger = 'darZ';
const passengerLower = passenger.toLowerCase();
// uppercase first letter, add the rest of the string onto this starting after first letter
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Darz

// Same in a function
const fixName = (name) => {
    const nameLower = name.toLowerCase();
    var nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
    // console.log(nameCorrect);
    return nameCorrect;
}

// log function
const logResult = (result) => console.log(result);

logResult(`Result: ${fixName('DaRzY')}`); // Result: Darzy

// comparing email
const email = 'hello@darz.io';
// mad entry with return on end
const userInputEmail = ' hEllo@DARZ.iO \n';

const lowerEmail = userInputEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
//trimStart() and trimEnd() also available
console.log(trimmedEmail); // hello@darz.io
//chained
let normalizedEmail = userInputEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@darz.io

// replacing
const priceIre = '€246,02';
// 2nd arg replacez the 1st one
const priceGB = priceIre.replace('€', '£').replace(',', '.');
console.log(priceGB); // £246.02

const announcement = 'All passengers come to boarding door 22. Boarding door 22';

//replaceAll not supported in IE
console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 22. Boarding gate 22
// alt fix with regex
console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 22. Boarding gate 22

const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Airb')); // false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the new Airbus family'); // Part of the new Airbus family
}

// Practice excersize
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    // if (baggage.includes('gun')) {
    //     console.log('You are not allowed on board');
    // } else {
    //     console.log('Welcome aboard');
    // }

    baggage.includes('gun') ? console.log('You are not allowed on board') : console.log('Welcome aboard');

}

checkBaggage('I have a laptop'); // 
checkBaggage('I have sockz'); // Welcome aboard
checkBaggage('I have a Gun'); // You are not allowed on board