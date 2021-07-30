// Javascript does not have passing by reference - only passing by value - even though it looks like it's passing by reference
// with objects a reference is actually passed into a function, but it is actually A VALUE - a value that containz a memory address
// we pass a reference to a function, but NOT BY A REFERENCE function
const flight = 'LH234';
const Darz = {
    name: 'Darz K',
    passport: 23456780101
}

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'test'; // will not overwrite the function param
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 23456780101) {
//         alert('Check in');
//     } else {
//         alert('Wrong passport');
//     }
// }

checkIn(flight, Darz);
console.log(flight);
console.log(Darz);