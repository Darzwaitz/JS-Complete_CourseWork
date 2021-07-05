'use strict';

const airline = 'TAP Air Ireland';
const plane = 'A320';

console.log('B737'[0]); // B

console.log(airline.length); // 15
console.log('B737'.length); // 4

console.log(airline.indexOf('e')); // 10
console.log(airline.lastIndexOf('r')); // 9
console.log(airline.indexOf('Ireland')); // 8

// slice starts ON the index number supplied - returns the value
console.log(airline.slice(4)); // Air Ireland

// 2nd param will stop BEFORE the index number supplied
console.log(airline.slice(4, 7)); // Air

// extract first word
console.log(airline.slice(0, airline.indexOf(' ')));

// locates last empty space, returns the word that follows - add +1 to get rid of that actual space that's returned
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// returns last 2 letters from the end of the string
console.log(airline.slice(-2)); // nd
console.log(airline.slice(1, -1)); // AP Air Irelan

// function to check if string contains B or E
const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1); // count back from the end
    if (s === 'B' || s === 'E') console.log('You got middle seat');
    else console.log('You got lucky');
}

checkMiddleSeat('11B'); // You got middle seat
checkMiddleSeat('23C'); // You got lucky
checkMiddleSeat('3E'); // You got middle seat

// JS converts a string to object behind the scenez (Boxing) - where methods are available, and then returns a string again
// all string methods return primitives
console.log(typeof new String('Darz')); // object
console.log(typeof 'Darz'); // string