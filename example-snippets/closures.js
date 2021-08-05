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