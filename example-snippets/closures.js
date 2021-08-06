'use strict';

// a closure happens in certain situations - it is not an explicit structure

// this inner returned function has access to the Execution Context of the parent function, even after the parent has run once already - variable will update within that EC

// a closure makes a function remember all of the variables created at the creation of that function

// any function always has access to the variable envirnment of the EC in which the function was created
// even after that EC is gone

// closure: the Variable Env. attached to the function, exactly as it was at the time and place the function was created

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

// the booker function closes over the secureBooking function (it's variable env.)
const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

//console.dir can show us where the closure is, and what property it's on
// NB. In the console using this command, where double square bracketz occur, this pointz to internal property we dont have access to as: [[Scopes]]

console.dir(booker);
// best viewed in chrome
// ƒ anonymous()
// arguments: (...)
// caller: (...)
// length: 0
// name: ""
// prototype: {constructor: ƒ}
// [[FunctionLocation]]: closures.js:17
// [[Prototype]]: ƒ ()
// [[Scopes]]: Scopes[3]
// 0: Closure (secureBooking) {passengerCount: 3}
// 1: Script {secureBooking: ƒ, booker: ƒ}
// 2: Global {window: Window, self: Window, document: document, name: "", location: Location, …}